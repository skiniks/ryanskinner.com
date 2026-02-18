import Button from '@/components/Button'
import RyanSkinner from '@/components/icons/RyanSkinner'

export default function Navbar() {
  return (
    <div className="relative z-20">
      <div className="mx-auto max-w-6xl py-4">
        <nav className="flex items-center justify-between p-4 text-white">
          <a href="/" className="flex items-center gap-2">
            <RyanSkinner className="w-40" />
          </a>

          <div className="flex items-center gap-4">
            <Button href="/posts">Posts</Button>
          </div>
        </nav>
      </div>
    </div>
  )
}
