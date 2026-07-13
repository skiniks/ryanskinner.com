import { Image } from 'rari/image'
import { formatDateRange, isFutureDate } from '@/lib/dates'

interface Talk {
  name: string
  location: string
  flag: string
  url: string
  startDate: string
  endDate?: string
  image?: string
  blurDataURL?: string
}

const talks: Talk[] = [
  {
    name: 'React Summit',
    location: 'Amsterdam',
    flag: '🇳🇱',
    url: 'https://gitnation.com/badges/react-summit-2026/ryan_skinner_155589',
    startDate: '2026-06-12',
    endDate: '2026-06-12',
    image: '/images/react-summit.jpg',
    blurDataURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVQIWwGlAFr/ARwtN/8nJScAGRUUAOj9AADy+P0A6fn+APD6/QD6up4AAQgHA/8yOUMAJiksAAD/AQDj+P0A9PsBANGzlQD+9/sAASwdCv/g7PoAAQMEAPHy9gBocXUAnZWNABALBgATCwoAAUc6F//92OkAME8tAKGp2gBaTU4Av8fFADExFgATFNwAAV5BIf+41PIACvntAOURKwAbLDUAOAPcAO/d9gDC3dMAEAJAbojXOh8AAAAASUVORK5CYII=',
  },
  {
    name: 'React Advanced',
    location: 'London',
    flag: '🇬🇧',
    url: 'https://gitnation.com/badges/react-advanced-2026/ryan_skinner_155589',
    startDate: '2026-10-23',
    endDate: '2026-10-26',
    image: '/images/react-advanced.jpg',
    blurDataURL: 'data:image/jpeg;base64,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gYuaTNJmkzTAXNJmkzSE0DFJppNBNNJoAUmmk0hNNJoGKTSUUlMYUUUUCCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAXNGaSigB2aM02lpCFzRSZozQFhc0ZptFFgsPzRmm5ozRYLDs0uaZmlzRYVh+aM03NGaQWH5pc0zNLmgLD80uaZmlzQIdmlzTc0ZoAfmjNNzS5oAdmjNNzS5oAdmjNNzS5oAdmjNNzRmgB2aM03NLmgBc0ZpM0ZoAWjNNzRmgB2aM03NGaAFzRmkzSZoAXNGabmjNAxc0maTNJmgBc0maTNITTAXNITSE00mgYpNITSE02gYuaSiimAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUALRmiigBc0uabRSCw/NLmmZpc0gsPzS5pmaM0CsPzS5pmaXNAWH5ozTc0ZoEPzRmm5ozQA7NLmmZpc0AOzRmm5ozQA7NGabmjNADs0ZpuaM0ALmjNNzRmgB2aTNNzRmgBc0ZpuaTNADs0mabmkzQMcTSE03NJmmApNJmkopjCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACilooASilooAKKKKACiiigYUUUUAFFFFABmlzSUUgHZpc0yjNFgH5pc0zNLmlYVh2aXNMzS5oAdmlzTM0ZoEPzRmm5ozSAdmjNNzRmgB2aTNNzRmmIdmjNNzSZoAdmkzSZpM0WGOzSZpuaM07ALmkzSUUxhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUALRRRQMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApc0lFIBc0ZpKKBC5pc02igB2aM03NGaLALmjNJSUAOzSZpKKYC5pKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBaKKKBhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRSUCCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAFooooGFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUCCkoooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Z',
  },
]

export default function UpcomingTalks() {
  const upcomingTalks = talks.filter(talk =>
    isFutureDate(talk.endDate || talk.startDate),
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
              {talk.image && (
                <div className="w-full aspect-video overflow-hidden bg-gray-800 rounded-t-lg">
                  <Image
                    src={talk.image}
                    alt={`${talk.name}`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder={talk.blurDataURL ? 'blur' : undefined}
                    blurDataURL={talk.blurDataURL}
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
