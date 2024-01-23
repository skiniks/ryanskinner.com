<template>
  <div class="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
    <div class="text-center">
      <h1 class="text-6xl font-black tracking-tight text-transparent bg-clip-text animated-gradient sm:text-8xl pb-2">
        Let's build a better internet together.
      </h1>
      <p class="mt-6 text-lg leading-8 text-gray-300 font-mono sm:text-xl">
        I'm a creative software developer passionate about exceptional
        design, enhancing the developer experience, and pushing the boundaries of the modern web. I've collaborated
        with a diverse range of clients and utilized various technologies to craft beautiful, accessible, and
        high-performing web applications.
      </p>
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
