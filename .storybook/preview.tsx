import React from "react";

import "../src/styles/globals.css";
import { withThemeByDataAttribute } from "@storybook/addon-styling";

// const withGlobalStyle = (Story) => (
// 	<>
// 		<Global
// 			styles={css`
// 				body {
// 					font-family: Lato, "Helvetica Neue", Arial, sans-serif;
// 				}

// 				* {
// 					font-size: 1rem;
// 				}
// 			`}
// 		/>
// 		<Story />
// 	</>
// );

export default {
	parameters: {
		backgrounds: {
			default: "light",
			values: [
				{
					name: "light",
					value: "#ffffff",
				},
			],
		},
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [
		withThemeByDataAttribute({
			themes: {
				light: "light",
				dark: "dark",
			},
			defaultTheme: "light",
			attributeName: "data-mode",
		}),
	],
};
