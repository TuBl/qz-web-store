import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "./AspectRatio";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction

const IconMeta: Meta<typeof Icon> = {
	title: "Components/Icon",
	component: Icon,
	tags: ["autodocs"],
	argTypes: {},
};

export default IconMeta;
type IconStory = StoryObj<typeof IconMeta>;

export const HeroPreview: IconStory = {
	args: {
		src: "/images/hero.png",
		alt: "hero",
		width: 64,
		height: 64,
	},
	render: (args) => <Icon {...args} />,
};
