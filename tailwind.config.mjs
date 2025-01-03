/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'background': '#030712',
				'primary': '#81FF83',
			}
		},
	},
	plugins: [],
}
