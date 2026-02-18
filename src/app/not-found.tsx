export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#f0f6fc]">404 - Page Not Found</h1>
        <p className="text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
        <a
          href="/"
          className="inline-block bg-[#fd7e14] text-white! px-6 py-3 rounded-lg font-semibold transition-all duration-300 no-underline! hover:no-underline! hover:scale-[1.02] hover:brightness-[1.3]"
        >
          Go Home
        </a>
      </div>
    </div>
  )
}
