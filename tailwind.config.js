/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts,md}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				background: '#030706',
				textPrimary: '#CCD6F6',
				textAccent: '#64FFDA',
				buttonGradient: 'linear-gradient(135deg, #122D22 50%, #265842 50%, #122D22 40%)'
			},
			cursor: {
				laptop: "url('/custom/Laptop.cur'), pointer",
				pepper: "url('/custom/pepper.cur'), pointer"
			}
		}
	},
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	plugins: [require('tailwind-scrollbar')({ nocompatible: true })]
};
