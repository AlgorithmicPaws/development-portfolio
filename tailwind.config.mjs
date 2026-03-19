/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'brand-navy':   'rgb(47,76,121)',
				'brand-red':    'rgb(200,35,55)',
				'brand-orange': 'rgb(224,98,54)',
				'brand-gold':   'rgb(215,171,97)',
			},
		},
	},
	plugins: [],
}
