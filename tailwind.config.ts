import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				black: '#060606',
				gray: '#929292',
				green: '#9AFF9A',
				'dark-gray': '#282828',
			},
			maxWidth: {
				container: '1320px',
			},
		},
	},
	plugins: [],
}
export default config
