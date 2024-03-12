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
				".boxShadow": {
					"@apply shadow-[0_0_7px_2px_rgba(69,107,12,42)]": {},
				},
				".dotHover": {
					"@apply group-hover:w-[2px] group-hover:h-[2px] group-hover:bg-lime-400 transition-all ease-linear duration-500 delay-0 rounded-full group-hover:boxShadow": {},
				},
			})
		}),
	],
}
