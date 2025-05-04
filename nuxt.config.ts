// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: process.env.NODE_ENV !== 'production' },
	app: {
		head: {
			title: 'Velas Blog',
			meta: [
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1',
				},
				{
					name: 'description',
					content: 'A simple blog built with love, and Nuxt 3 and Vite',
				},
				{
					name: 'keywords',
					content: 'nuxt, vite, blog, javascript, web development',
				},
				{
					name: 'author',
					content: 'VictorVelas',
				},
			],
			link: [
				{
					rel: 'stylesheet',
					href: 'styles/layouts/default.css',
				}
			]
		}
	}
})
