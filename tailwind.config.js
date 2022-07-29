/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: { DEFAULT: '#1849C6', dark: '#021850', lighter: '#F6F8FD' },
				secondary: '#FFCE31',
				transparent: 'transparent',
				paragraph: '#000103B2',
			},
			backgroundImage: {
				hero: "url('./assets/img/hero.png')",
				active: "url('./assets/img/active-bg.png')",
				storage: "url('./assets/img/self-storage-bg.svg')",
				queries: "url('./assets/img/queries.png')",
			},
			boxShadow: {
				query: '0px 30px 40px 0px rgba(24, 73, 198, 0.1)',
			},
		},
	},
	plugins: [],
};
