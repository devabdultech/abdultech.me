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
			}
		}
	},
	plugins: [require('tailwind-scrollbar-hide')]
};
