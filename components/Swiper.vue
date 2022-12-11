<template>
  <div class="flex items-center justify-center relative">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <nuxt-picture
            format="avif"
            quality="60"
            loading="lazy"
            src="/images/uoft-logo.svg"
            alt="University of Toronto"
            sizes="xs:225px md:480px lg:600px"
            width="225"
            height="125"
          />
        </div>
        <div class="swiper-slide">
          <nuxt-picture
            format="avif"
            quality="60"
            loading="lazy"
            src="/images/wgc-logo.png"
            alt="Wine Growers Canada"
            sizes="xs:225px md:480px lg:680px"
            width="225"
            height="125"
            fit="contain"
          />
        </div>
        <div class="swiper-slide">
          <nuxt-picture
            format="avif"
            quality="60"
            loading="lazy"
            src="/images/c3-logo.png"
            alt="Cannabis Council of Canada"
            sizes="xs:225px md:480px lg:680px"
            width="225"
            height="125"
            fit="contain"
          />
        </div>
        <div class="swiper-slide">
          <nuxt-picture
            format="avif"
            quality="60"
            loading="lazy"
            src="/images/rhf-logo.png"
            alt="Rideau Hall Foundation"
            sizes="xs:225px md:480px lg:680px"
            width="225"
            height="125"
            fit="contain"
          />
        </div>
        <div class="swiper-slide">
          <nuxt-picture
            format="avif"
            quality="60"
            loading="lazy"
            src="/images/cbtu-logo.svg"
            alt="Canadian Building Trades Union"
            sizes="xs:225px md:480px lg:680px"
            width="225"
            height="125"
            fit="contain"
          />
        </div>
        <div class="swiper-slide">
          <nuxt-picture
            format="avif"
            quality="60"
            loading="lazy"
            src="/images/nwac-logo.png"
            alt="Native Women's Association of Canada"
            sizes="xs:225px md:480px lg:680px"
            width="225"
            height="125"
            fit="contain"
          />
        </div>
        <div class="swiper-slide">
          <nuxt-picture
            format="avif"
            quality="60"
            loading="lazy"
            src="/images/calpoly-logo.png"
            alt="California Polytechnic State University"
            sizes="xs:225px md:480px lg:680px"
            width="225"
            height="125"
            fit="contain"
          />
        </div>
        <div class="swiper-slide">
          <nuxt-picture
            format="avif"
            quality="60"
            loading="lazy"
            src="/images/reed-logo.png"
            alt="Reed College, Portland, Oregon"
            sizes="xs:225px md:480px lg:680px"
            width="225"
            height="125"
            fit="contain"
          />
        </div>
        <div class="swiper-slide">
          <nuxt-picture
            format="avif"
            quality="60"
            loading="lazy"
            src="/images/carthage-logo.png"
            alt="Carthage College, Kenosha, Wisconsin"
            sizes="xs:225px md:480px lg:680px"
            width="225"
            height="125"
            fit="contain"
          />
        </div>
        <div class="swiper-slide">
          <nuxt-picture
            format="avif"
            quality="60"
            loading="lazy"
            src="/images/ppmd-logo.png"
            alt="Parent Project Muscular Dystrophy"
            sizes="xs:225px md:480px lg:680px"
            width="225"
            height="125"
            fit="contain"
          />
        </div>
        <div class="swiper-slide">
          <nuxt-picture
            format="avif"
            quality="60"
            loading="lazy"
            src="/images/eoc-logo.png"
            alt="Energy Outreach Colorado"
            sizes="xs:225px md:480px lg:680px"
            width="225"
            height="125"
            fit="contain"
          />
        </div>
        <div class="swiper-slide">
          <nuxt-picture
            format="avif"
            quality="60"
            loading="lazy"
            src="/images/wayfinder-logo.png"
            alt="Wayfinder Family Services"
            sizes="xs:225px md:480px lg:680px"
            width="225"
            height="125"
            fit="contain"
          />
        </div>
        <div class="swiper-slide">
          <nuxt-picture
            format="avif"
            quality="60"
            loading="lazy"
            src="/images/aicf-logo.png"
            alt="American Indian College Fund"
            sizes="xs:225px md:480px lg:680px"
            width="225"
            height="125"
            fit="contain"
          />
        </div>
        <div class="swiper-slide">
          <nuxt-picture
            format="avif"
            quality="80"
            loading="lazy"
            src="/images/recording-academy.png"
            alt="Recording Academy"
            sizes="xs:225px md:480px lg:680px"
            width="225"
            height="125"
            fit="contain"
          />
        </div>
        <div class="swiper-slide">
          <nuxt-picture
            format="avif"
            quality="60"
            loading="lazy"
            src="/images/cal-state-seal.png"
            alt="California State University"
            sizes="xs:225px md:480px lg:680px"
            width="225"
            height="125"
            fit="contain"
          />
        </div>
        <div class="swiper-slide">
          <nuxt-picture
            format="avif"
            quality="60"
            loading="lazy"
            src="/images/mcmaster-wordmark.png"
            alt="McMaster University"
            sizes="xs:225px md:480px lg:680px"
            width="225"
            height="125"
            fit="contain"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Swiper, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

Swiper.use([Pagination, Autoplay])

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
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
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

<style lang="scss" scoped>
.swiper {
  width: 100%;
  align-items: center;
  &-slide {
    margin: auto;
    background-position: center;
    background-size: contain;
    opacity: 0.75;
    &:hover {
      opacity: 1;
      scale: 1.1;
    }
    img {
      margin: auto;
    }
    &-active {
      opacity: 0.85;
    }
    &:not(.swiper-slide-active):not(.swiper-slide-prev):not(
        .swiper-slide-next
      ) {
      opacity: 0.25;
    }
  }
}
</style>
