<template>
  <main>
    <div class="sm:max-w-6xl sm:mx-auto p-4">
      <NavBar />
      <div class="cta">
        <div class="flex justify-center w-full lg:w-7/12 items-baseline">
          <h2 class="text-5xl">
            I design and build digital products that are
            <span class="italic font-semibold">very fast</span>
            so your visitors don't bounce on you ✌️
          </h2>
        </div>
        <div class="flex justify-center w-full lg:w-5/12 items-center">
          <h3 class="text-3xl">
            Currently I'm having a lot of fun experimenting with
            <a href="https://vitejs.dev/" target="_blank">Vite</a>
            and
            <a href="https://vuejs.org/" target="_blank">Vue 3.</a>
            When I'm not coding, you can catch me on a run or searching for and
            collecting antiques.
          </h3>
        </div>
      </div>
      <div class="bio">
        <p class="text-center text-2xl">
          I'm from Toronto, Ontario, Canada and have extensive experience
          building with WordPress for corporate and non-profit clients across
          Canada and the United States. I am a front-end focused creative
          developer with a passion for building fast, accessible and beautiful
          websites. When I'm not working with WordPress, I'm fervently exploring
          the world of Jamstack.
        </p>
      </div>
    </div>
    <div class="w-full pb-20">
      <div class="sm:max-w-6xl sm:mx-auto">
        <h4 class="text-3xl text-right pb-4">
          Some organizations that
          <br />
          I've worked with 🤝
        </h4>
      </div>
      <Swiper />
    </div>
  </main>
</template>

<style scoped>
.cta {
  height: 50vh;
  @apply flex flex-col lg:flex-row justify-center;
}
@media (max-width: 768px) {
  .cta {
    height: auto;
    padding-bottom: 2rem;
  }
  .cta div {
    padding-bottom: 2rem;
  }
}
.bio {
  height: 35vh;
  @apply flex justify-center w-full md:w-10/12 md:mx-auto;
}
@media (max-width: 768px) {
  .bio {
    height: auto;
    padding-bottom: 3rem;
  }
}
</style>
