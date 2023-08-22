import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "./Badge";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction

const BadgeMeta: Meta<typeof Badge> = {
	title: "Components/Badge",
	component: Badge,
	tags: ["autodocs"],
	argTypes: {},
};

export default BadgeMeta;
type BadgeStory = StoryObj<typeof BadgeMeta>;

export const Default: BadgeStory = {
	args: {
		variant: "default",
	},
	render: (args) => <Badge {...args}>Badge</Badge>,
};

export const Secondary: BadgeStory = {
	args: {
		variant: "secondary",
	},
	render: (args) => <Badge {...args}>Badge</Badge>,
};

export const Destructive: BadgeStory = {
	args: {
		variant: "destructive",
	},
	render: (args) => <Badge {...args}>Badge</Badge>,
};

export const Outline: BadgeStory = {
	args: {
		variant: "outline",
	},
	render: (args) => <Badge {...args}>Badge</Badge>,
};

export const Link: BadgeStory = {
	args: {
		variant: "default",
		asLink: true,
		href: "/test",
	},
	render: (args) => <Badge {...args}>Badge</Badge>,
};
