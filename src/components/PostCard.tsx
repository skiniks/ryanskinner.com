import ArrowNarrowRight from '@/components/icons/ArrowNarrowRight'
import { formatDate } from '@/lib/posts'

interface PostCardProps {
  slug: string
  title: string
  description: string
  date: string
  readingTime: number
  variant?: 'default' | 'featured'
}

export default function PostCard({
  slug,
  title,
  description,
  date,
  readingTime,
  variant = 'default',
}: PostCardProps) {
  const isFeatured = variant === 'featured'

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 isolate before:content-[''] before:absolute before:inset-0 before:opacity-0 before:z-0 before:pointer-events-none before:transition-opacity before:duration-300 before:ease-in-out before:bg-[url('/assets/card-bg.avif')] before:bg-size-[150%_150%] before:bg-center before:animate-[move-background_8s_ease-in-out_infinite] after:content-[''] after:absolute after:inset-[2px] after:z-1 after:rounded-2xl after:bg-gray-900 after:border-2 after:border-gray-800 after:transition-[border-color] after:duration-300 after:ease-in-out hover:before:opacity-100 hover:after:border-transparent">
      <div className={`relative z-2 flex flex-1 flex-col ${isFeatured ? 'p-8 sm:p-10' : 'p-6 sm:p-8'}`}>
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <time
            dateTime={date}
            className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1.5 font-semibold text-blue-400 ring-1 ring-inset ring-blue-500/20"
          >
            {formatDate(date)}
          </time>
          <span className="inline-flex items-center rounded-full bg-gray-700/50 px-3 py-1.5 font-semibold text-gray-300 ring-1 ring-inset ring-gray-600">
            {readingTime}
            {' '}
            min read
          </span>
        </div>

        <div className={`flex-1 ${isFeatured ? 'mt-5 sm:mt-6' : 'mt-4'}`}>
          <h2 className={`font-bold tracking-tight text-white transition-colors duration-200 ${isFeatured ? 'text-3xl sm:text-4xl' : 'text-2xl line-clamp-2'
          }`}
          >
            <a href={`/posts/${slug}`} className="focus:outline-none">
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
          <span>{isFeatured ? 'Continue reading' : 'Read article'}</span>
          <ArrowNarrowRight className={`transition-transform duration-300 ease-in-out group-hover:translate-x-1 ${isFeatured ? 'h-5 w-5' : 'h-4 w-4'
          }`}
          />
        </div>
      </div>
    </article>
  )
}
