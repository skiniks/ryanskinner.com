<script setup lang="ts">
interface Logo {
  name: string
  path: string
}

const logoData: Logo[] = [
  { name: 'American Indian College Fund Logo', path: 'aicf-logo.png' },
  { name: 'California State University Seal', path: 'cal-state-seal.png' },
  { name: 'C3 Logo', path: 'c3-logo.png' },
  { name: 'Carthage College Logo', path: 'carthage-logo.png' },
  { name: 'CBTU Logo', path: 'cbtu-logo.svg' },
  { name: 'EOC Logo', path: 'eoc-logo.png' },
  { name: 'General Assembly Pizza Logo', path: 'ga-pizza.webp' },
  { name: 'McMaster University Wordmark', path: 'mcmaster-wordmark.png' },
  { name: 'NWAC Logo', path: 'nwac-logo.png' },
  { name: 'PPMD Logo', path: 'ppmd-logo.png' },
  { name: 'Recording Academy Logo', path: 'recording-academy.png' },
  { name: 'Reed College Logo', path: 'reed-logo.png' },
  { name: 'RHF Logo', path: 'rhf-logo.png' },
  { name: 'University of Toronto Logo', path: 'uoft-logo.svg' },
  { name: 'Wayfinder Family Services Logo', path: 'wayfinder-logo.png' },
  { name: 'WGC Logo', path: 'wgc-logo.png' },
]

function generateLogoPath(path: string): string {
  return `/logos/${path}`
}
</script>

<template>
  <div class="max-w-6xl mx-auto p-8">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3 lg:grid-cols-4">
        <div v-for="logo in logoData" :key="logo.path" class="bg-white/5 p-6 flex items-center justify-center">
          <nuxt-img :src="generateLogoPath(logo.path)" :alt="`${logo.name}`" class="w-full object-contain hover:scale-105 transition-all duration-300 ease-in-out" />
        </div>
      </div>
    </div>
  </div>
</template>
