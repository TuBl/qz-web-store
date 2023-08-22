import type { Meta, StoryObj } from "@storybook/react";

import DropDownComponent from "./DropdownMenu";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof DropDownComponent> = {
	title: "Components/DropDownComponent",
	component: DropDownComponent,
	tags: ["autodocs"],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
	args: {
		label: "Menu",
	},
	render: (args) => <DropDownComponent {...args} />,
};

export const Fallback: Story = {
	args: {
		label: "Navigate",
	},
	render: (args) => <DropDownComponent {...args} />,
};
