<template>
  <LayoutNavbar />
  <article class="prose mx-auto flex max-w-2xl flex-col gap-4">
    <slot />
  </article>
  <LayoutFooter />
</template>

<style>
.prose h2 a,
.prose h3 a,
.prose h4 a {
  @apply decoration-none font-extrabold;
}

.prose p > code,
.prose li > code {
  @apply text-background bg-primary mx-1 px-2 py-1 text-sm;
}

.prose pre {
  @apply font-code my-0 text-sm;

  background-color: theme('colors.gray.900') !important;

  @media (width < 767px) {
    white-space: pre-wrap;
  }

  + h2,
  + h3,
  + h4 {
    @apply mt-8;
  }

  + p {
    @apply mt-6;
  }
}

.prose p + div {
  @apply mt-6 py-1 text-xs font-bold uppercase;

  letter-spacing: 0.15rem;
}
</style>
