import { ContentRendererMarkdown } from '#components'
import { h } from 'vue'

export default defineComponent({
  props: {
    path: String,
  },
  async setup(props) {
    if (import.meta.dev) {
      const { data } = await useAsyncData(() =>
        queryContent(props.path!).findOne(),
      )
      return () => h(ContentRendererMarkdown, { value: data.value! })
    }
    const value = await queryContent(props.path!).findOne()
    return () => h(ContentRendererMarkdown, { value })
  },
})
