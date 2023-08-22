import type { Meta, StoryObj } from "@storybook/react";

import { Toaster } from "@/components/ui/toaster";
import { ToastDemo } from "./Toast";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction

const ToastMeta: Meta<typeof ToastDemo> = {
	title: "Components/ToastDemo",
	component: ToastDemo,
	tags: ["autodocs"],
	argTypes: {},
};

export default ToastMeta;
type ToastStory = StoryObj<typeof ToastMeta>;

export const Default: ToastStory = {
	args: {},

	render: (args: any) => (
		<>
			<ToastDemo {...args} />,
			<Toaster />
		</>
	),
};
