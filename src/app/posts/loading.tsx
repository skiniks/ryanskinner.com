export default function Loading() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 sm:mb-12">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-800 rounded-lg w-48 mb-3" />
            <div className="h-6 bg-gray-800 rounded w-96" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }, (_, i) => (
            <div key={`skeleton-${i}`} className="animate-pulse rounded-2xl bg-gray-800 p-6 h-64" />
          ))}
        </div>
      </div>
    </div>
  )
}
