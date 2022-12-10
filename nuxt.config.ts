// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	target: "static",
	components: true,
	modules: [
		// https://windicss.org/guide/nuxt.html
		"nuxt-windicss",
		// https://v1.image.nuxtjs.org/
		"@nuxt/image-edge",
		// https://github.com/nuxt-community/robots-module
		"@nuxtjs/robots",
	],
	buildModules: ["@nuxt/typescript-build"],
	"@nuxt/typescript-build": {
		strict: true,
		typeCheck: true,
	},
	css: ["virtual:windi-base.css", "virtual:windi-utilities.css"],
})
