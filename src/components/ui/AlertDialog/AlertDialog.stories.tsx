import type { Meta, StoryObj } from "@storybook/react";

import { AlertDialogComponent } from "./AlertDialog";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof AlertDialogComponent> = {
	title: "Components/AlertDialogComponent",
	component: AlertDialogComponent,
	tags: ["autodocs"],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
	args: {
		triggerText: "Show Dialog",
		title: "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
		description:
			"This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
	},
	render: (args) => <AlertDialogComponent {...args} />,
};

export const AsChild: Story = {
	args: {
		triggerText: "Show Dialog",
		title: "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
		description:
			"This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
		asChild: true,
	},
	render: (args) => <AlertDialogComponent {...args} />,
};
