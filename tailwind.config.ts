/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin"
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	theme: {
		fontFamily: {
			'boring' : ['SpaceGrotesk'],
			'eighties' : ['PressStart2P'],
		},
		extend: {
			colors: {
				darks: {
					'background': "#101216",
					'foreground': "#262B34",
					'foreground2': "#3B4351",
					'lightgray': "#9C9FA6",
					'lights': "#F2F2F2",
				},
			},	
			animation: {
				'spin-slow': 'spin 12s linear infinite',
			}
		},
	},
	plugins: [
		plugin(function astroComponentsPlugin({ addComponents }) {
			addComponents({
				".container": {
					"@apply max-w-[1024px] mx-auto px-5 md:px-10 lg:px-16 xl:max-w-[87.5rem]": {},
				},
				".boxShadow": {
					"@apply shadow-[0_0_7px_2px_rgba(12,74,110,13)]": {},
				},
				".dotHover": {
					"@apply group-hover:w-[2px] group-hover:h-[2px] group-hover:bg-sky-400 transition-all ease-linear duration-500 delay-0 rounded-full group-hover:boxShadow": {},
				},
				".flexJustifyCenter" :{
					"@apply flex items-center justify-center": {},
				},
				".buttonLink" :{
					"@apply flex items-center gap-2 rounded-md border border-darks-lights/10 group-hover:border-darks-lights/40 px-3 py-1": {},
				},
				".buttonUtils" :{
					"@apply border flex items-center justify-center gap-3 px-4 py-3 rounded-md transition-colors ease-linear duration-150": {},
				},
				".componentStyle": {
					"@apply border border-darks-lights/30 hover:border-darks-lights transition-all duration-150 ease-in-out":{},
				},
				".transitionAll": {
					"@apply transition-all duration-150 ease-in-out":{},
				},
			})
		}),
	],
}
