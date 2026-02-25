import Bluesky from '@/components/icons/Bluesky'
import Github from '@/components/icons/Github'
import Rari from '@/components/icons/Rari'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    {
      name: 'GitHub',
      url: 'https://github.com/skiniks',
      icon: <Github className="h-6 w-6 relative z-10" />,
      gradient: 'from-[#fd7e14]/10 to-[#e8590c]/10',
    },
    {
      name: 'Bluesky',
      url: 'https://bsky.app/profile/ryanskinner.com',
      icon: <Bluesky className="h-6 w-6 relative z-10" />,
      gradient: 'from-blue-500/10 to-cyan-500/10',
    },
  ]

  return (
    <footer className="bg-gray-900 rounded-t-md border-t-2 border-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          <p className="text-center text-sm leading-5 text-gray-300 sm:text-left order-2 sm:order-1">
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link relative hover:text-gray-100 transition-colors duration-200"
            >
              CC BY-SA 4.0
            </a>
            {' '}
            &copy; 2023-
            {currentYear}
            {' '}
            Ryan Skinner
          </p>
          <a
            href="https://rari.build"
            className="flex items-center justify-center gap-2 text-gray-300 hover:text-gray-100 transition-colors duration-200 group order-1 sm:order-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Built with rari"
          >
            <span className="text-sm">Built with</span>
            <Rari className="h-5 w-10 relative z-10 group-hover:opacity-80 transition-opacity" />
          </a>
          <div className="flex items-center justify-center sm:justify-end space-x-4 sm:space-x-6 order-3">
            {links.map(link => (
              <a
                key={link.name}
                href={link.url}
                className="p-2 text-gray-300 hover:text-gray-100 hover:bg-[#21262d] rounded-md transition-all duration-200 relative overflow-hidden group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Link to ${link.name}`}
              >
                <span className={`absolute inset-0 bg-linear-to-r ${link.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></span>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
