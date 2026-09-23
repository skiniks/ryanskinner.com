import { generateOGImage } from '@/lib/site/og-image'

export default function Image() {
  return generateOGImage({
    title: 'Posts',
    subtitle: 'Thoughts on software engineering and performance',
  })
}
