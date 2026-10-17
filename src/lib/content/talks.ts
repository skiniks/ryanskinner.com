import type { ImageProps } from 'rari/image'
import reactAdvanced from '@/assets/images/react-advanced.jpg'
import reactSummit from '@/assets/images/react-summit.jpg'

export interface Talk {
  readonly name: string
  readonly location: string
  readonly flag: string
  readonly url: string
  readonly startDate: string
  readonly endDate?: string
  readonly image?: ImageProps['src']
}

export const talks: readonly Talk[] = [
  {
    name: 'React Summit',
    location: 'Amsterdam',
    flag: '🇳🇱',
    url: 'https://gitnation.com/badges/react-summit-2026/ryan_skinner_155589',
    startDate: '2026-06-12',
    endDate: '2026-06-12',
    image: reactSummit,
  },
  {
    name: 'React Advanced',
    location: 'London',
    flag: '🇬🇧',
    url: 'https://gitnation.com/badges/react-advanced-2026/ryan_skinner_155589',
    startDate: '2026-10-23',
    endDate: '2026-10-23',
    image: reactAdvanced,
  },
]
