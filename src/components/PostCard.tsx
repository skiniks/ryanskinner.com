import ArrowNarrowRight from '@/components/icons/ArrowNarrowRight'
import ExternalLink from '@/components/icons/ExternalLink'
import { formatDate } from '@/lib/dates'
import { badgeStyles, getCardClasses } from '@/lib/styles'

interface PostCardProps {
  slug: string
  title: string
  description: string
  date: string
  readingTime: number
  variant?: 'default' | 'featured'
  highlighted?: boolean
  externalUrl?: string
}

export default function PostCard({
  slug,
  title,
  description,
  date,
  readingTime,
  variant = 'default',
  highlighted = false,
  externalUrl,
}: PostCardProps) {
  const isFeatured = variant === 'featured'
  const isExternal = !!externalUrl
  const href = isExternal ? externalUrl : `/posts/${slug}`

  return (
    <article className={getCardClasses(highlighted)}>
      <div className={`relative z-2 flex flex-1 flex-col ${isFeatured ? 'p-8 sm:p-10' : 'p-6 sm:p-8'}`}>
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <time
            dateTime={date}
            className={badgeStyles.date}
          >
            {formatDate(date)}
          </time>
          {isExternal
            ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-3 py-1.5 text-sm font-semibold text-amber-400 ring-1 ring-inset ring-amber-500/20">
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  External
                </span>
              )
            : (
                <span className={badgeStyles.readingTime}>
                  {readingTime}
                  {' '}
                  min read
                </span>
              )}
        </div>

        <div className={`flex-1 ${isFeatured ? 'mt-5 sm:mt-6' : 'mt-4'}`}>
          <h2 className={`font-bold tracking-tight text-white transition-colors duration-200 ${isFeatured ? 'text-3xl sm:text-4xl' : 'text-2xl line-clamp-2'
          }`}
          >
            <a
              href={href}
              className="focus:outline-none"
              {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className="absolute inset-0" aria-hidden="true" />
              {title}
            </a>
          </h2>
          <p className={`text-gray-400 ${isFeatured ? 'mt-4 text-lg leading-8' : 'mt-3 text-lg leading-7 line-clamp-3'
          }`}
          >
            {description}
          </p>
        </div>

        <div className={`flex items-center gap-1 font-semibold text-blue-400 group-hover:text-blue-300 ${isFeatured ? 'mt-5 sm:mt-6 text-base' : 'mt-4 text-base'
        }`}
        >
          <span>
            {isExternal
              ? 'Read on external site'
              : isFeatured ? 'Continue reading' : 'Read article'}
          </span>
          <ArrowNarrowRight className={`transition-transform duration-300 ease-in-out group-hover:translate-x-1 ${isFeatured ? 'h-5 w-5' : 'h-4 w-4'
          }`}
          />
        </div>
      </div>
    </article>
  )
}
