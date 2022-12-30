/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./Components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			boxShadow: {
				cart: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
			},
		},
		colors: {
			transparent: "transparent",
			// Primary colors
			primaryOrange: "hsl(26, 100%, 55%)",
			paleOrange: "hsl(25, 100%, 94%)",
			// Neutral colors
			shadowOrange: "hsla(26, 100%, 55%, 0.7)",
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
