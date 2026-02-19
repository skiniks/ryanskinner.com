export default function Hero() {
  return (
    <div className="relative isolate mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 lg:pt-44 lg:pb-56 max-w-6xl">
      <div
        className="absolute left-1/2 transform -translate-x-1/2 top-10 -z-10 blur-3xl sm:left-[calc(50%-9rem)] lg:bottom-[calc(50%-30rem)] lg:left-24 xl:left-[calc(20%-12rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-1108/632 w-full max-w-full bg-linear-to-r from-[#80caff] to-[#4f46e5] opacity-40"
          style={{
            clipPath: 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
        />
      </div>
      <div className="animate-fadeInMoveUp text-center">
        <h1 className="animated-gradient bg-clip-text pb-2 text-6xl font-black tracking-tight text-transparent sm:text-7xl lg:text-8xl">
          Let's build a better internet together.
        </h1>
        <h2 className="mt-6 max-w-5xl mx-auto font-mono text-xl leading-8 sm:text-2xl sm:leading-8 lg:text-2xl text-balance">
          I'm a creative software engineer passionate about exceptional design,
          enhancing the developer experience, and pushing the boundaries of the
          modern web. I'm currently building
          {' '}
          <a href="https://rari.build" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-70 transition-opacity">rari</a>
          , a React Server Components framework powered by a Rust runtime that delivers 46.5x higher throughput and 9.1x faster response times than Next.js.
        </h2>
      </div>
    </div>
  )
}
