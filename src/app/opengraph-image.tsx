import { generateOGImage } from '@/lib/og-image'

export default function Image() {
  return generateOGImage({ logoSize: 'large' })
}
