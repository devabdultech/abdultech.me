/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts,md}'],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundImage: {
				'grainy-overlay': 'url(grainy.svg)'
			},
			colors: {
				background: '#030706',
				textPrimary: '#CCD6F6',
				textAccent: '#64FFDA',
				buttonGradient: 'linear-gradient(135deg, #122D22 50%, #265842 50%, #122D22 40%)'
			},
			cursor: {
				laptop: 'url(Laptop.cur), pointer'
			}
		}
	},
	plugins: [require('tailwind-scrollbar-hide')]
};
