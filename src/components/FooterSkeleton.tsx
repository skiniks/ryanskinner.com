export default function FooterSkeleton() {
  return (
    <footer className="bg-gray-900 rounded-t-md border-t-2 border-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          <div className="animate-pulse h-5 bg-gray-800 rounded w-48 mx-auto sm:mx-0" />
          <div className="animate-pulse h-5 bg-gray-800 rounded w-32 mx-auto" />
          <div className="flex items-center justify-center sm:justify-end space-x-4 sm:space-x-6">
            <div className="animate-pulse h-10 w-10 bg-gray-800 rounded-md" />
            <div className="animate-pulse h-10 w-10 bg-gray-800 rounded-md" />
          </div>
        </div>
      </div>
    </footer>
  )
}
