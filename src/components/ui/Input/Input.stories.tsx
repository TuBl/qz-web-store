import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction

const InputMeta: Meta<typeof Input> = {
	title: "Components/Input",
	component: Input,
	tags: ["autodocs"],
	argTypes: {},
};

export default InputMeta;
type InputStory = StoryObj<typeof InputMeta>;

export const Default: InputStory = {
	args: {},

	render: (args: any) => <Input {...args} />,
};
