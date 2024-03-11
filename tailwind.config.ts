/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin"
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [
		plugin(function astroComponentsPlugin({ addComponents, theme }) {
			addComponents({
				".container": {
					"@apply w-full max-w-screen-md mx-auto px-6 md:px-8 border border-zinc-900 my-12": {},
				},
			})
		}),
	],
}
