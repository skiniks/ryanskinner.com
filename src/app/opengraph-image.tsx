import { generateOGImage } from '@/lib/site/og-image'

export default function Image() {
  return generateOGImage({ logoSize: 'large' })
}
