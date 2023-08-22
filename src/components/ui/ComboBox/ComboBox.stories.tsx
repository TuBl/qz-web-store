import type { Meta, StoryObj } from "@storybook/react";

import { ComboboxDemo } from "./ComboBox";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction

const ComboBoxMeta: Meta<typeof ComboboxDemo> = {
	title: "Components/ComboboxDemo",
	component: ComboboxDemo,
	tags: ["autodocs"],
	argTypes: {},
};

export default ComboBoxMeta;
type ComboBoxStory = StoryObj<typeof ComboBoxMeta>;

export const Default: ComboBoxStory = {
	args: {
		ComboBoxGroups: {
			Suggestions: ["Calendar", "Search Emoji", "Calculator"],
			Settings: ["Profile", "Billing", "Settings"],
		},
	},

	render: (args: any) => <ComboboxDemo {...args} />,
};
