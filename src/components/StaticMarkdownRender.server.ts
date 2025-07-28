import { ContentRenderer } from '#components'
import { h } from 'vue'

export default defineComponent({
  props: {
    path: String,
  },
  async setup(props) {
    if (import.meta.dev) {
      const { data } = await useAsyncData(() =>
        queryCollection('posts').path(props.path!).first(),
      )
      return () => h(ContentRenderer, { value: data.value! })
    }
    const value = await queryCollection('posts').path(props.path!).first()
    return () => h(ContentRenderer, { value })
  },
})
