// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	target: "static",
	modules: [
		// https://windicss.org/guide/nuxt.html
		"nuxt-windicss",
		// https://v1.image.nuxtjs.org/
		"@nuxt/image-edge",
		// https://github.com/nuxt-community/robots-module
		"@nuxtjs/robots",
	],
})
