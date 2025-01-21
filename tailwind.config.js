const { colors } = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	// 增加深色的樣式
	darkMode: "class",
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: "1.5rem",
			screens: {
				"2xl": "1360px",
			},
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-inter)", ...fontFamily.sans],
			},
			colors: {
				...colors,
				"light-gold": "#f5bc51",
				"dark-gold": "#533519",
			},
			keyframes: {
				slideDown: {
					from: { height: "0px" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				slideUp: {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0px" },
				},
			},
			spacing: {
				"1/2vh": "50vh",
				"1/3vh": "33.3vh",
				"2/3vh": "66.6vh",
				"1/4vh": "25vh",
				"3/4vh": "75vh",
				"1/5vh": "20vh",
				"2/5vh": "40vh",
				"3/5vh": "60vh",
				"4/5vh": "80vh",
			},
			animation: {
				slideDown: "slideDown 500ms ease-out",
				slideUp: "slideUp 500ms ease-out",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/typography"),
	],
};
