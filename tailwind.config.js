/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts,md}'],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundImage: {
				'grainy-overlay': "url('./src/styles/grainy.svg')"
			},
			colors: {
				background: '#030706',
				textPrimary: '#CCD6F6',
				textAccent: '#64FFDA'
			}
		}
	},
	plugins: []
};
