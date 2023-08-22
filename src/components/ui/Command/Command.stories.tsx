import type { Meta, StoryObj } from "@storybook/react";

import { CommandComponent } from "./Command";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction

const CommandMeta: Meta<typeof CommandComponent> = {
	title: "Components/CommandComponent",
	component: CommandComponent,
	tags: ["autodocs"],
	argTypes: {},
};

export default CommandMeta;
type CommandStory = StoryObj<typeof CommandMeta>;

export const Default: CommandStory = {
	args: {
		commandGroups: {
			Suggestions: ["Calendar", "Search Emoji", "Calculator"],
			Settings: ["Profile", "Billing", "Settings"],
		},
	},

	render: (args: any) => <CommandComponent {...args} />,
};
