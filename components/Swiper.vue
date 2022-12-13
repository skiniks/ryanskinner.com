<template>
  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <nuxt-picture
          format="avif"
          quality="60"
          loading="lazy"
          src="/images/uoft-logo.svg"
          alt="University of Toronto"
          width="280"
          height="158"
          sizes="sm:100vw md:50vw lg:280px"
        />
      </div>
      <div class="swiper-slide">
        <nuxt-picture
          format="avif"
          quality="60"
          loading="lazy"
          src="/images/wgc-logo.png"
          alt="Wine Growers Canada"
          width="280"
          height="158"
          sizes="sm:100vw md:50vw lg:280px"
        />
      </div>
      <div class="swiper-slide">
        <nuxt-picture
          format="avif"
          quality="60"
          loading="lazy"
          src="/images/c3-logo.png"
          alt="Cannabis Council of Canada"
          width="280"
          height="158"
          sizes="sm:100vw md:50vw lg:280px"
        />
      </div>
      <div class="swiper-slide">
        <nuxt-picture
          format="avif"
          quality="60"
          loading="lazy"
          src="/images/rhf-logo.png"
          alt="Rideau Hall Foundation"
          width="280"
          height="158"
          sizes="sm:100vw md:50vw lg:280px"
        />
      </div>
      <div class="swiper-slide">
        <nuxt-picture
          format="avif"
          quality="60"
          loading="lazy"
          src="/images/cbtu-logo.svg"
          alt="Canadian Building Trades Union"
          width="280"
          height="158"
          sizes="sm:100vw md:50vw lg:280px"
        />
      </div>
      <div class="swiper-slide">
        <nuxt-picture
          format="avif"
          quality="60"
          loading="lazy"
          src="/images/nwac-logo.png"
          alt="Native Women's Association of Canada"
          width="280"
          height="158"
          sizes="sm:100vw md:50vw lg:280px"
        />
      </div>
      <div class="swiper-slide">
        <nuxt-picture
          format="avif"
          quality="60"
          loading="lazy"
          src="/images/calpoly-logo.png"
          alt="California Polytechnic State University"
          width="280"
          height="158"
          sizes="sm:100vw md:50vw lg:280px"
        />
      </div>
      <div class="swiper-slide">
        <nuxt-picture
          format="avif"
          quality="60"
          loading="lazy"
          src="/images/reed-logo.png"
          alt="Reed College, Portland, Oregon"
          width="280"
          height="158"
          sizes="sm:100vw md:50vw lg:280px"
        />
      </div>
      <div class="swiper-slide">
        <nuxt-picture
          format="avif"
          quality="60"
          loading="lazy"
          src="/images/carthage-logo.png"
          alt="Carthage College, Kenosha, Wisconsin"
          width="280"
          height="158"
          sizes="sm:100vw md:50vw lg:280px"
        />
      </div>
      <div class="swiper-slide">
        <nuxt-picture
          format="avif"
          quality="60"
          loading="lazy"
          src="/images/ppmd-logo.png"
          alt="Parent Project Muscular Dystrophy"
          width="280"
          height="158"
          sizes="sm:100vw md:50vw lg:280px"
        />
      </div>
      <div class="swiper-slide">
        <nuxt-picture
          format="avif"
          quality="60"
          loading="lazy"
          src="/images/eoc-logo.png"
          alt="Energy Outreach Colorado"
          width="280"
          height="158"
          sizes="sm:100vw md:50vw lg:280px"
        />
      </div>
      <div class="swiper-slide">
        <nuxt-picture
          format="avif"
          quality="60"
          loading="lazy"
          src="/images/wayfinder-logo.png"
          alt="Wayfinder Family Services"
          width="280"
          height="158"
          sizes="sm:100vw md:50vw lg:280px"
        />
      </div>
      <div class="swiper-slide">
        <nuxt-picture
          format="avif"
          quality="60"
          loading="lazy"
          src="/images/aicf-logo.png"
          alt="American Indian College Fund"
          width="280"
          height="158"
          sizes="sm:100vw md:50vw lg:280px"
        />
      </div>
      <div class="swiper-slide">
        <nuxt-picture
          format="avif"
          quality="80"
          loading="lazy"
          src="/images/recording-academy.png"
          alt="Recording Academy"
          width="280"
          height="158"
          sizes="sm:100vw md:50vw lg:280px"
        />
      </div>
      <div class="swiper-slide">
        <nuxt-picture
          format="avif"
          quality="60"
          loading="lazy"
          src="/images/cal-state-seal.png"
          alt="California State University"
          width="280"
          height="158"
          sizes="sm:100vw md:50vw lg:280px"
        />
      </div>
      <div class="swiper-slide">
        <nuxt-picture
          format="avif"
          quality="60"
          loading="lazy"
          src="/images/mcmaster-wordmark.png"
          alt="McMaster University"
          width="280"
          height="158"
          sizes="sm:100vw md:50vw lg:280px"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Swiper, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

Swiper.use([Autoplay])

export default {
  mounted() {
    /* eslint-disable no-unused-vars */
    const swiper = new Swiper('.swiper', {
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 2.5,
        },
        1024: {
          slidesPerView: 3.5,
        },
        1280: {
          slidesPerView: 5.5,
        },
      },
    })
  },
}
</script>

<style scoped>
.swiper-slide {
  opacity: 0.75;
  transition: opacity 0.3s, transform 0.3s;
}
.swiper-slide:hover {
  @apply opacity-100 scale-110;
}
@media (max-width: 768px) {
  .swiper-slide:hover {
    scale: 1;
  }
}
.swiper-slide-active {
  opacity: 0.85;
}
.swiper-slide:not(.swiper-slide-active):not(.swiper-slide-prev):not(
    .swiper-slide-next
  ) {
  opacity: 0.25;
}
</style>
