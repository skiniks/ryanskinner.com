<template>
  <div class="bg-black">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Ryan Skinner</span>
            <nuxt-img src="/logo.svg" alt="logo" class="w-40 sm:w-46" />
          </a>
        </div>
      </nav>
    </header>

    <div class="relative isolate overflow-hidden pt-14">
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[25deg] bg-gradient-to-bl from-emerald-400 to-cyan-500 opacity-25 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(70% 50%, 100% 65%, 95% 30%, 85% 5%, 80% 10%, 70% 40%, 60% 60%, 50% 70%, 45% 55%, 40% 30%, 25% 80%, 0 70%, 15% 100%, 30% 75%, 75% 95%, 70% 50%)"
        />
      </div>
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="text-center">
          <h1 class="text-6xl font-bold tracking-tight text-transparent bg-clip-text animated-gradient sm:text-7xl pb-1">
            Let's build a better internet together.
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-300">
            I'm a creative software developer passionate about exceptional
            design, enhancing the developer experience, and pushing the boundaries of the modern web. I've collaborated
            with a diverse range of clients and utilized various technologies to craft beautiful, accessible, and
            high-performing web applications.
          </p>
        </div>
      </div>
      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[335deg] bg-gradient-to-br from-emerald-400 to-cyan-500 opacity-25 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(70% 50%, 100% 65%, 95% 30%, 85% 5%, 80% 10%, 70% 40%, 60% 60%, 50% 70%, 45% 55%, 40% 30%, 25% 80%, 0 70%, 15% 100%, 30% 75%, 75% 95%, 70% 50%)"
        />
      </div>
    </div>
  </div>
</template>

<style>
.animated-gradient {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style>
