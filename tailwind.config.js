/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./Components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
		colors: {
			transparent: "transparent",
			// Primary colors
			primaryOrange: "hsl(26, 100%, 55%)",
			paleOrange: "hsl(25, 100%, 94%)",
			// Neutral colors
			veryDarkBlue: "hsl(220, 13%, 13%)",
			darkGrayishBlue: "hsl(219, 9%, 45%)",
			grayishBlue: "hsl(220, 14%, 75%)",
			lightGrayishBlue: "hsl(223, 64%, 98%)",
			white: "hsl(0, 0%, 100%)",
			black: "hsl(0, 0%, 0%)",
			lightboxBackground: "hsla(0, 0%, 0%, 0.75)",
		},
	},
	plugins: [],
};
