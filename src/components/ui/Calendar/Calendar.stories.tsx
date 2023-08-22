import type { Meta, StoryObj } from "@storybook/react";

import { CalendarComponent } from "./Calendar";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction

const CalendarMeta: Meta<typeof CalendarComponent> = {
	title: "Components/Calendar",
	component: CalendarComponent,
	tags: ["autodocs"],
	argTypes: {},
};

export default CalendarMeta;
type CalendarStory = StoryObj<typeof CalendarMeta>;

export const Single: CalendarStory = {
	args: {
		variant: "single",
	},
	argTypes: {
		variant: {
			options: ["single", "multiple", "range"],
			control: { type: "select" },
			description: "Variants of the Calendar component",
			type: { name: "string", required: true },
			table: {
				type: { summary: "single | multiple | range" },
				defaultValue: { summary: "single" },
			},
		},
	},
	render: (args: any) => <CalendarComponent {...args} />,
};

export const Multiple: CalendarStory = {
	args: {
		variant: "multiple",
	},
	render: (args: any) => <CalendarComponent {...args} />,
};

export const Range: CalendarStory = {
	args: {
		variant: "range",
	},
	render: (args: any) => <CalendarComponent {...args} />,
};
