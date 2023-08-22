import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
	tags: ["autodocs"],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
	args: {
		variant: "default",
		size: "default",
	},
	render: (args) => <Button {...args}>Click</Button>,
};

export const Destructive: Story = {
	args: {
		variant: "destructive",
		size: "default",
	},
	render: (args) => <Button {...args}>Click</Button>,
};

export const Outline: Story = {
	args: {
		variant: "outline",
		size: "default",
		className: "text-primary-700",
	},
	render: (args) => <Button {...args}>Click</Button>,
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		size: "default",
	},
	render: (args) => <Button {...args}>Click</Button>,
};

export const Ghost: Story = {
	args: {
		variant: "ghost",
		size: "default",
	},
	render: (args) => <Button {...args}>Click</Button>,
};

export const AsChild: Story = {
	args: {
		variant: "default",
		size: "default",
		asChild: true,
	},
	render: (args) => (
		<Button {...args}>
			<div>Click Div</div>
		</Button>
	),
};
