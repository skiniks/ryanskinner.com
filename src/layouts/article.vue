<template>
  <LayoutNavbar />
  <article class="flex flex-col gap-4 max-w-2xl mx-auto prose">
    <slot />
  </article>
  <LayoutFooter />
</template>

<style>
.prose h2 a,
.prose h3 a,
.prose h4 a  {
  @apply font-extrabold decoration-none;
}

.prose p>code,
.prose li>code {
  @apply px-2 py-1 mx-1 text-sm text-background bg-primary;
}

.prose pre {
  @apply font-code text-sm my-0;

  background-color: theme('colors.gray.900') !important;

  @media (width < 767px) {
    white-space: pre-wrap;
  }

  +h2,
  +h3,
  +h4 {
    @apply mt-8;
  }

  +p {
    @apply mt-6;
  }
}

.prose p+div {
  @apply mt-6 py-1 uppercase text-xs font-bold;

  letter-spacing: 0.15rem;
}
</style>
