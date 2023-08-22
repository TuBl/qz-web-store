import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./Checkbox";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction

const CheckboxMeta: Meta<typeof Checkbox> = {
	title: "Components/Checkbox",
	component: Checkbox,
	tags: ["autodocs"],
	argTypes: {},
};

export default CheckboxMeta;
type CheckboxStory = StoryObj<typeof CheckboxMeta>;

export const Default: CheckboxStory = {
	args: {},

	render: (args: any) => <Checkbox {...args} />,
};
