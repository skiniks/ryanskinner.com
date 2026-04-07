export default function Loading() {
  return (
    <article className="mx-auto flex max-w-2xl flex-col gap-4 px-4 sm:px-6 py-12 sm:py-16">
      <header className="animate-pulse">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <div className="h-8 w-32 bg-gray-800 rounded-full" />
          <div className="h-8 w-24 bg-gray-800 rounded-full" />
        </div>
        <div className="h-12 bg-gray-800 rounded-lg w-full mb-3" />
        <div className="h-12 bg-gray-800 rounded-lg w-3/4" />
        <div className="mt-3 flex flex-wrap gap-2">
          <div className="h-7 w-20 bg-gray-800 rounded-full" />
          <div className="h-7 w-24 bg-gray-800 rounded-full" />
        </div>
      </header>
      <div className="animate-pulse space-y-4 mt-8">
        <div className="h-4 bg-gray-800 rounded w-full" />
        <div className="h-4 bg-gray-800 rounded w-11/12" />
        <div className="h-4 bg-gray-800 rounded w-full" />
        <div className="h-4 bg-gray-800 rounded w-10/12" />
        <div className="h-8" />
        <div className="h-4 bg-gray-800 rounded w-full" />
        <div className="h-4 bg-gray-800 rounded w-11/12" />
        <div className="h-4 bg-gray-800 rounded w-full" />
      </div>
    </article>
  )
}
