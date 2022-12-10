<template>
	<div class="flex items-center justify-center relative">
		<div class="swiper">
			<div class="swiper-wrapper">
				<div class="swiper-slide opacity-75">
					<nuxt-img
						format="webp"
						quality="60"
						loading="lazy"
						src="/images/uoft-logo.svg"
						alt="University of Toronto"
						sizes="sm:280px md:480px lg:600px"
					/>
				</div>
				<div class="swiper-slide opacity-75">
					<nuxt-img
						format="webp"
						quality="60"
						loading="lazy"
						src="/images/wgc-logo.png"
						alt="Wine Growers Canada"
						sizes="sm:280px md:480px lg:600px"
					/>
				</div>
				<div class="swiper-slide opacity-75">
					<nuxt-img
						format="webp"
						quality="60"
						loading="lazy"
						src="/images/c3-logo.png"
						alt="Cannabis Council of Canada"
						sizes="sm:280px md:480px lg:600px"
					/>
				</div>
				<div class="swiper-slide opacity-75">
					<nuxt-img
						format="webp"
						quality="60"
						loading="lazy"
						src="/images/rhf-logo.png"
						alt="Rideau Hall Foundation"
						sizes="sm:280px md:480px lg:600px"
					/>
				</div>
				<div class="swiper-slide opacity-75">
					<nuxt-img
						format="webp"
						quality="60"
						loading="lazy"
						src="/images/ypo-logo.png"
						class="max-h-14 m-auto"
						alt="Young Professionals Organization"
						sizes="sm:280px md:480px lg:600px"
					/>
				</div>
				<div class="swiper-slide opacity-75">
					<nuxt-img
						format="webp"
						quality="60"
						loading="lazy"
						src="/images/cbtu-logo.svg"
						alt="Canadian Building Trades Union"
						sizes="sm:280px md:480px lg:600px"
					/>
				</div>
				<div class="swiper-slide opacity-75">
					<nuxt-img
						format="webp"
						quality="60"
						loading="lazy"
						src="/images/nwac-logo.png"
						alt="Native Women's Association of Canada"
						sizes="sm:280px md:480px lg:600px"
					/>
				</div>
				<div class="swiper-slide opacity-75">
					<nuxt-img
						format="webp"
						quality="60"
						loading="lazy"
						src="/images/calpoly-logo.png"
						alt="California Polytechnic State University"
						sizes="sm:280px md:480px lg:600px"
					/>
				</div>
				<div class="swiper-slide opacity-75">
					<nuxt-img
						format="webp"
						quality="60"
						loading="lazy"
						src="/images/reed-logo.png"
						alt="Reed College, Portland, Oregon"
						sizes="sm:280px md:480px lg:600px"
					/>
				</div>
				<div class="swiper-slide opacity-75">
					<nuxt-img
						format="webp"
						quality="60"
						loading="lazy"
						src="/images/carthage-logo.png"
						alt="Carthage College, Kenosha, Wisconsin"
						sizes="sm:280px md:480px lg:600px"
					/>
				</div>
				<div class="swiper-slide opacity-75">
					<nuxt-img
						format="webp"
						quality="60"
						loading="lazy"
						src="/images/ppmd-logo.png"
						alt="Parent Project Muscular Dystrophy"
						sizes="sm:280px md:480px lg:600px"
					/>
				</div>
				<div class="swiper-slide opacity-75">
					<nuxt-img
						format="webp"
						quality="60"
						loading="lazy"
						src="/images/eoc-logo.png"
						alt="Energy Outreach Colorado"
						sizes="sm:280px md:480px lg:600px"
					/>
				</div>
				<div class="swiper-slide opacity-75">
					<nuxt-img
						format="webp"
						quality="60"
						loading="lazy"
						src="/images/wayfinder-logo.png"
						alt="Wayfinder Family Services"
						sizes="sm:280px md:480px lg:600px"
					/>
				</div>
				<div class="swiper-slide opacity-75">
					<nuxt-img
						format="webp"
						quality="60"
						loading="lazy"
						src="/images/aicf-logo.png"
						alt="American Indian College Fund"
						sizes="sm:280px md:480px lg:600px"
					/>
				</div>
				<div class="swiper-slide opacity-75">
					<nuxt-img
						format="webp"
						quality="80"
						loading="lazy"
						src="/images/recording-academy.png"
						alt="Recording Academy"
						sizes="sm:280px md:480px lg:600px"
					/>
				</div>
				<div class="swiper-slide opacity-75">
					<nuxt-img
						format="webp"
						quality="60"
						loading="lazy"
						src="/images/cal-state-seal.png"
						alt="California State University"
						sizes="sm:280px md:480px lg:600px"
					/>
				</div>
				<div class="swiper-slide opacity-75">
					<nuxt-img
						format="webp"
						quality="60"
						loading="lazy"
						src="/images/mcmaster-wordmark.png"
						alt="McMaster University"
						sizes="sm:280px md:480px lg:600px"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Swiper, Pagination, Autoplay } from "swiper"
import "swiper/swiper-bundle.min.css"

Swiper.use([Pagination, Autoplay])

export default {
	mounted() {
		/* eslint-disable no-unused-vars */
		const swiper = new Swiper(".swiper", {
			loop: true,
			grabCursor: true,
			centeredSlides: true,
			autoplay: {
				delay: 1800,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".swiper-pagination",
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
		background-size: cover;
		&:hover {
			opacity: 1;
			scale: 1.1;
		}
		img {
			margin: auto;
		}
		&-active {
			opacity: 0.87;
		}
	}
}
.swiper-slide:not(.swiper-slide-active):not(.swiper-slide-prev):not(.swiper-slide-next) {
	opacity: 0.25;
}
</style>
