import { Image } from 'rari/image'
import { talks } from '@/lib/content/talks'
import { formatDateRange, isFutureDate } from '@/lib/utils/date'

export default function UpcomingTalks() {
  const upcomingTalks = talks.filter(talk =>
    isFutureDate(talk.endDate ?? talk.startDate),
  )

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
              className="group relative flex flex-col rounded-lg border border-gray-800 bg-gray-900/50 transition-all duration-200 hover:border-blue-500/50 hover:bg-gray-900 hover:scale-[1.02]"
            >
              {talk.image != null && (
                <div className="relative w-full aspect-video overflow-hidden bg-gray-800 rounded-t-lg">
                  <Image
                    src={talk.image}
                    alt={talk.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder={talk.blurDataURL != null && talk.blurDataURL !== '' ? 'blur' : undefined}
                    blurDataURL={talk.blurDataURL}
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
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

                  <div className="text-sm font-mono text-gray-400 whitespace-nowrap">
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
