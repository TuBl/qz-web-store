import type { Meta, StoryObj } from "@storybook/react";

import { AvatarComponent } from "./Avatar";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction

const AvatarMeta: Meta<typeof AvatarComponent> = {
	title: "Components/AvatarComponent",
	component: AvatarComponent,
	tags: ["autodocs"],
	argTypes: {},
};

export default AvatarMeta;
type AvatarStory = StoryObj<typeof AvatarMeta>;

export const Default: AvatarStory = {
	args: {
		src: "https://github.com/shadcn.png",
		fallback: "TY",
	},
	render: (args) => <AvatarComponent {...args} />,
};

export const Fallback: AvatarStory = {
	args: {
		src: "",
		fallback: "TY",
	},
	render: (args) => <AvatarComponent {...args} />,
};
