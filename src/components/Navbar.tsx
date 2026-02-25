import Button from '@/components/Button'
import RyanSkinner from '@/components/icons/RyanSkinner'

export default function Navbar() {
  return (
    <div className="relative z-20">
      <div className="mx-auto max-w-6xl px-4 pb-4 pt-8 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-2 text-white">
          <a href="/" className="flex items-center gap-2" aria-label="Ryan Skinner - Home">
            <RyanSkinner className="w-40 sm:w-44" />
          </a>

          <div className="flex items-center gap-2 sm:gap-4">
            <Button href="/posts">Posts</Button>
          </div>
        </nav>
      </div>
    </div>
  )
}
