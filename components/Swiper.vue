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
					/>
				</div>
				<div class="swiper-slide opacity-75">
					<nuxt-img
						format="webp"
						quality="60"
						loading="lazy"
						src="/images/wgc-logo.png"
						alt="Wine Growers Canada"
					/>
				</div>
				<div class="swiper-slide opacity-75">
					<nuxt-img
						format="webp"
						quality="60"
						loading="lazy"
						src="/images/c3-logo.png"
						alt="Cannabis Council of Canada"
					/>
				</div>
				<div class="swiper-slide opacity-75">
					<nuxt-img
						format="webp"
						quality="60"
						loading="lazy"
						src="/images/rhf-logo.png"
						alt="Rideau Hall Foundation"
					/>
				</div>
				<div class="swiper-slide opacity-75">
					<nuxt-img
						format="webp"
						quality="60"
						loading="lazy"
						src="/images/ypo-logo.png"
						alt="Young Professionals Organization"
						class="max-h-14 m-auto"
					/>
				</div>
				<div class="swiper-slide opacity-75">
					<nuxt-img
						format="webp"
						quality="60"
						loading="lazy"
						src="/images/cbtu-logo.svg"
						alt="Canadian Building Trades Union"
					/>
				</div>
				<div class="swiper-slide opacity-75">
					<nuxt-img
						format="webp"
						quality="60"
						loading="lazy"
						src="/images/nwac-logo.png"
						alt="Native Women's Association of Canada"
					/>
				</div>
				<div class="swiper-slide opacity-75">
					<nuxt-img
						format="webp"
						quality="60"
						loading="lazy"
						src="/images/calpoly-logo.png"
						alt="California Polytechnic State University"
					/>
				</div>
				<div class="swiper-slide opacity-75">
					<nuxt-img
						format="webp"
						quality="60"
						loading="lazy"
						src="/images/reed-logo.png"
						alt="Reed College, Portland, Oregon"
					/>
				</div>
				<div class="swiper-slide opacity-75">
					<nuxt-img
						format="webp"
						quality="60"
						loading="lazy"
						src="/images/carthage-logo.png"
						alt="Carthage College, Kenosha, Wisconsin"
					/>
				</div>
				<div class="swiper-slide opacity-75">
					<nuxt-img
						format="webp"
						quality="60"
						loading="lazy"
						src="/images/ppmd-logo.png"
						alt="Parent Project Muscular Dystrophy"
					/>
				</div>
				<div class="swiper-slide opacity-75">
					<nuxt-img
						format="webp"
						quality="60"
						loading="lazy"
						src="/images/eoc-logo.png"
						alt="Energy Outreach Colorado"
					/>
				</div>
				<div class="swiper-slide opacity-75">
					<nuxt-img
						format="webp"
						quality="60"
						loading="lazy"
						src="/images/wayfinder-logo.png"
						alt="Wayfinder Family Services"
					/>
				</div>
				<div class="swiper-slide opacity-75">
					<nuxt-img
						format="webp"
						quality="60"
						loading="lazy"
						src="/images/aicf-logo.png"
						alt="American Indian College Fund"
					/>
				</div>
				<div class="swiper-slide opacity-75">
					<nuxt-img
						format="webp"
						quality="60"
						loading="lazy"
						src="/images/recording-academy.png"
						alt="Recording Academy"
					/>
				</div>
				<div class="swiper-slide opacity-75">
					<nuxt-img
						format="webp"
						quality="60"
						loading="lazy"
						src="/images/cal-state-seal.png"
						alt="California State University"
					/>
				</div>
				<div class="swiper-slide opacity-75">
					<nuxt-img
						format="webp"
						quality="60"
						loading="lazy"
						src="/images/mcmaster-wordmark.png"
						alt="McMaster University"
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
			max-width: 280px;
			margin: auto;
		}
	}
}
.swiper-slide:not(.swiper-slide-active):not(.swiper-slide-prev):not(.swiper-slide-next) {
	opacity: 0.25;
}
.swiper-slide-active {
	opacity: 0.87;
}
</style>
