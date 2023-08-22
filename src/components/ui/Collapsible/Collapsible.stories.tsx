import type { Meta, StoryObj } from "@storybook/react";

import { CollapsibleDemo } from "./Collapsible";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction

const CollapsibleMeta: Meta<typeof CollapsibleDemo> = {
	title: "Components/CollapsibleDemo",
	component: CollapsibleDemo,
	tags: ["autodocs"],
	argTypes: {},
};

export default CollapsibleMeta;
type CollapsibleStory = StoryObj<typeof CollapsibleMeta>;

export const Default: CollapsibleStory = {
	args: {},

	render: (args: any) => <CollapsibleDemo {...args} />,
};
