export default function Loading() {
  return (
    <>
      <div className="relative isolate mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 lg:pt-44 lg:pb-56 max-w-6xl">
        <div className="animate-pulse text-center">
          <div className="h-20 bg-gray-800 rounded-lg w-3/4 mx-auto mb-6" />
          <div className="h-6 bg-gray-800 rounded w-full max-w-5xl mx-auto mb-4" />
          <div className="h-6 bg-gray-800 rounded w-5/6 max-w-5xl mx-auto" />
        </div>
      </div>

      <div className="py-12 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16 lg:px-8">
          <div className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="animate-pulse rounded-2xl bg-gray-800 p-6 h-64" />
          </div>
          <div className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="animate-pulse rounded-2xl bg-gray-800 p-6 h-28" />
              <div className="animate-pulse rounded-2xl bg-gray-800 p-6 h-28" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
