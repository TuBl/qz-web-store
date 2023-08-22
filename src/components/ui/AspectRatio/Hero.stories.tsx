import type { Meta, StoryObj } from "@storybook/react";

import { Hero } from "./AspectRatio";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction

const HeroMeta: Meta<typeof Hero> = {
	title: "Components/Hero",
	component: Hero,
	tags: ["autodocs"],
	argTypes: {},
};

export default HeroMeta;
type HeroStory = StoryObj<typeof HeroMeta>;

export const HeroPreview: HeroStory = {
	args: {
		src: "/images/hero.png",
		alt: "hero",
		width: 640,
		height: 640,
	},
	render: (args) => <Hero {...args} />,
};
