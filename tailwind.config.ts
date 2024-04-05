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
			animation: {
				'spin-slow': 'spin 12s linear infinite',
			}
		},
	},
	plugins: [
		plugin(function astroComponentsPlugin({ addComponents, theme }) {
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
					"@apply flex items-center gap-2 bg-zinc-900 group-hover:bg-zinc-800 rounded-md border border-zinc-800 group-hover:border-zinc-700 px-3 py-1": {},
				},
				".buttonUtils" :{
					"@apply border flex items-center justify-center gap-3 px-4 py-3 rounded-md transition-colors ease-linear duration-150": {},
				},
				".componentStyle": {
					"@apply bg-zinc-950 hover:bg-zinc-950 border border-zinc-900 hover:border-zinc-50 transition-all duration-150 ease-in-out":{},
				},
				".transitionAll": {
					"@apply transition-all duration-150 ease-in-out":{},
				},
				".navbars.active":{
					"@apply absolute top-[70px] left-0 grid p-[1rem] bg-zinc-950 w-full":{}
				},
				".navlinkActive.active":{
					"@apply text-4xl w-full":{}
				}
			})
		}),
	],
}
