const plugin = require("tailwindcss/plugin");

const grey = {
	100: "#f2f2f2",
	200: "#DADADA",
	400: "#9c9c9c",
	600: "#717171",
	800: "#4A4A4A",
	900: "#14171D",
};

const primary = {
	100: "#E5E7FE",
	200: "#C6CAFF",
	300: "#B2BBFF",
	400: "#7D8AFF",
	500: "#5E70FE",
	600: "#3548E2",
	700: "#1A2DC0",
	800: "#0B1A95",
	900: "#00073D",
};
const secondary = {
	100: "#E5FCFF",
	200: "#C4F9FF",
	300: "#B3F7FF",
	400: "#7DF2FF",
	500: "#34D1E3",
	600: "#34CBDC",
	700: "#1BAFBF",
	800: "#0A8694",
	900: "#003A4D",
};
const red = {
	100: "#FEE5E5",
	200: "#FEC4C4",
	300: "#FEB2B2",
	400: "#FE7C7C",
	500: "#FE5E5E",
	600: "#E33434",
	700: "#BF1B1B",
	800: "#940A0A",
	900: "#330505",
};
const green = {
	100: "#E6FFED",
	200: "#C4FFD5",
	300: "#B2FFC9",
	400: "#6CDC8B",
	500: "#34DC63",
	600: "#34E365",
	700: "#1BBF49",
	800: "#0A9430",
	900: "#084D1B",
};
const blue = {
	100: "#E5FCFF",
	200: "#C4F9FF",
	300: "#B3F7FF",
	400: "#7DF2FF",
	500: "#34D1E3",
	600: "#34CBDC",
	700: "#1BAFBF",
	800: "#0A8694",
	900: "#003A4D",
};
const orange = {
	100: "#FFF2E5",
	200: "#FFE1C4",
	300: "#FFD7B2",
	400: "#FFBC7D",
	500: "#FFAC5E",
	600: "#E38934",
	700: "#BF6A1A",
	800: "#944D0A",
	900: "#803E00",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	// Toggle dark-mode based on data-mode="dark"
	darkMode: ["class", '[data-mode="dark"]'],
	theme: {
		fontWeight: {
			light: 300,
			normal: 400,
			bold: 700,
			bolder: 900,
		},
		lineHeight: {
			xs: 1,
			sm: 1.25,
			md: 1.5,
			lg: 1.625,
			xl: 1.75,
		},
		letterSpacings: {
			tighter: "-0.05rem",
			tight: "-0.025rem",
			normal: "0",
			wide: "0.025rem",
			wider: "0.05rem",
			widest: "0.1rem",
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-inter)"],
			},
			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				marquee: {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-100%)" },
				},
				blink: {
					"0%": { opacity: 0.2 },
					"20%": { opacity: 1 },
					"100% ": { opacity: 0.2 },
				},
			},
			animation: {
				fadeIn: "fadeIn .3s ease-in-out",
				carousel: "marquee 60s linear infinite",
				blink: "blink 1.4s both infinite",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			backgroundColor: {
				grey,
				primary,
				secondary,
				red,
				green,
				blue,
				orange,
			},
			textColor: {
				grey,
				primary,
				secondary,
				red,
				green,
				blue,
				orange,
			},
			width: {
				50: "50px",
				64: "64px",
				96: "96px",
				128: "128px",
				256: "256px",
				450: "450px",
				512: "512px",
				640: "640px",
				768: "768px",
				1024: "1024px",
				1280: "1280px",
				1440: "1440px",
				1920: "1920px",
				2560: "2560px",
			},
			height: {
				50: "50px",
				64: "64px",
				96: "96px",
				128: "128px",
				256: "256px",
				450: "450px",
				512: "512px",
				640: "640px",
				768: "768px",
				1024: "1024px",
				1280: "1280px",
				1440: "1440px",
				1920: "1920px",
				2560: "2560px",
			},
		},
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [
		require("@tailwindcss/container-queries"),
		require("@tailwindcss/typography"),
		plugin(({ matchUtilities, theme }) => {
			matchUtilities(
				{
					"animation-delay": (value) => {
						return {
							"animation-delay": value,
						};
					},
				},
				{
					values: theme("transitionDelay"),
				}
			);
		}),
	],
};
