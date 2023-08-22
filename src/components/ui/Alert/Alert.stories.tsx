import type { Meta, StoryObj } from "@storybook/react";

import { AlertComponent } from "./Alert";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof AlertComponent> = {
	title: "Components/AlertComponent",
	component: AlertComponent,
	tags: ["autodocs"],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args

export const Default: Story = {
	args: {
		title: "Heads up!",
		description:
			"You can add components and dependencies to your app using the cli.",
	},
	render: (args) => <AlertComponent {...args} />,
};

export const Destructie: Story = {
	args: {
		variant: "destructive",
		title: "Error",
		description: "Your session has expired. Please log in again.",
	},
	render: (args) => <AlertComponent {...args} />,
};
