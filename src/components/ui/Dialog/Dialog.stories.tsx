import type { Meta, StoryObj } from "@storybook/react";

import { DialogComponent, DialogProps } from "./Dialog";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<DialogProps> = {
	title: "Components/DialogComponent",
	component: DialogComponent,
	tags: ["autodocs"],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const DefaultContentStory: Story = {
	args: {
		triggerText: "Show Dialog",
		mode: "default",
		title: "This is a title",
		description: "This is a description",
	},
	render: (args: DialogProps) => <DialogComponent {...args} />,
};

export const SlotContentStory: Story = {
    args: {
        triggerText: "Show Dialog with Slot",
        mode: "slot",
		asChild: true,
        slot: <div>Your slot content here</div>,
    },
    render: (args: DialogProps) => <DialogComponent {...args} />,
};