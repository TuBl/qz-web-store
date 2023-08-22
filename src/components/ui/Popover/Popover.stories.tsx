import type { Meta, StoryObj } from "@storybook/react";

import { PopOverDemo } from "./Popover";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction

const PopOverMeta: Meta<typeof PopOverDemo> = {
	title: "Components/PopOverDemo",
	component: PopOverDemo,
	tags: ["autodocs"],
	argTypes: {},
};

export default PopOverMeta;
type PopOverStory = StoryObj<typeof PopOverMeta>;

export const Default: PopOverStory = {
	args: {},

	render: (args: any) => <PopOverDemo {...args} />,
};
