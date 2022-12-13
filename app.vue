<template>
  <NuxtPage />
</template>

<script lang="ts" setup>
const app = useAppConfig()
useHead({
  title: app.name,
  titleTemplate: '%s — Frontend Developer based in Toronto, Ontario, Canada',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content:
        'Ryan Skinner is a Designer and Frontend Developer based in Toronto, Ontario, Canada.',
    },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  htmlAttrs: {
    lang: 'en',
  },
})
</script>

<style>
@font-face {
  font-family: 'Clearface';
  src: url('/fonts/ClearfaceStd-Regular.woff2') format('woff2');
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Founders Grotesk';
  src: url('/fonts/FoundersGrotesk-Regular.woff2') format('woff2');
  font-style: normal;
  font-display: swap;
}
::selection {
  background-color: #42b883;
  color: rgba(255, 255, 255, 0.87);
}
body {
  background-color: #000;
  background-image: url('/images/gradient.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  margin: 0;
  padding: 0;
}
h2,
h3 {
  color: rgba(255, 255, 255, 0.87);
  font-family: 'Clearface';
  font-weight: 400;
}
p,
h4 {
  color: rgba(255, 255, 255, 0.87);
  font-family: 'Founders Grotesk';
  font-weight: 400;
}
a {
  color: #42b883;
}
h2 {
  @apply hover:scale-110 hover:rotate-[-4deg] transition-transform duration-300 ease-in-out;
}
@media (max-width: 768px) {
  h2:hover {
    @apply scale-100 rotate-0;
  }
}
h3 {
  @apply hover:scale-110 hover:rotate-[4deg] transition-transform duration-300 ease-in-out;
}
@media (max-width: 768px) {
  h3:hover {
    @apply scale-100 rotate-0;
  }
}
p {
  @apply hover:scale-110 transition-transform duration-300 ease-in-out;
}
@media (max-width: 768px) {
  p:hover {
    scale: 1;
    rotate: none;
  }
}
</style>
