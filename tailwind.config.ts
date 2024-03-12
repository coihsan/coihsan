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
					"@apply max-w-[1024px] mx-auto px-5 md:px-10 lg:px-16 xl:max-w-[87.5rem]": {},
				},
			})
		}),
	],
}
