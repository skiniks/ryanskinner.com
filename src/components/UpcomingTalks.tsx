import { Image } from 'rari/image'

interface Talk {
  name: string
  location: string
  flag: string
  url: string
  startDate: string
  endDate?: string
  image?: string
}

const talks: Talk[] = [
  {
    name: 'React Summit',
    location: 'Amsterdam',
    flag: '🇳🇱',
    url: 'https://gitnation.com/badges/react-summit-2026/ryan_skinner_155589',
    startDate: '2026-06-11',
    endDate: '2026-06-15',
    image: '/images/react-summit.jpg',
  },
]

function isTalkUpcoming(talk: Talk): boolean {
  const now = new Date()
  now.setHours(0, 0, 0, 0)

  const endDate = talk.endDate ? new Date(talk.endDate) : new Date(talk.startDate)
  endDate.setHours(23, 59, 59, 999)

  return endDate >= now
}

function formatDateRange(startDate: string, endDate?: string): string {
  const start = new Date(`${startDate}T12:00:00`)
  const startMonth = start.toLocaleDateString('en-US', { month: 'long' })
  const startDay = start.getDate()

  if (!endDate || startDate === endDate)
    return `${startMonth} ${startDay}`

  const end = new Date(`${endDate}T12:00:00`)
  const endMonth = end.toLocaleDateString('en-US', { month: 'long' })
  const endDay = end.getDate()

  if (startMonth === endMonth)
    return `${startMonth} ${startDay} - ${endDay}`

  return `${startMonth} ${startDay} - ${endMonth} ${endDay}`
}

export default function UpcomingTalks() {
  const upcomingTalks = talks.filter(isTalkUpcoming)

  if (upcomingTalks.length === 0)
    return null

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 sm:mb-8">
          Upcoming Talks
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingTalks.map(talk => (
            <a
              key={`${talk.name}-${talk.startDate}`}
              href={talk.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col rounded-lg border border-gray-800 bg-gray-900/50 overflow-hidden transition-all duration-200 hover:border-blue-500/50 hover:bg-gray-900 hover:scale-[1.02]"
            >
              {talk.image && (
                <div className="w-full aspect-video overflow-hidden bg-gray-800">
                  <Image
                    src={talk.image}
                    alt={`${talk.name}`}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="flex flex-col gap-3 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {talk.flag}
                      {' '}
                      {talk.name}
                    </h3>
                  </div>

                  <div className="text-sm font-mono text-gray-500 whitespace-nowrap">
                    {formatDateRange(talk.startDate, talk.endDate)}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
