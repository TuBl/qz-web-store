import type { Meta, StoryObj } from "@storybook/react";

// import { FormDemo } from "./Form";
import ProfileForm from "./ProfileForm";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction

const FormDemoMeta: Meta<typeof ProfileForm> = {
	title: "Components/FormDemo",
	component: ProfileForm,
	tags: ["autodocs"],
	argTypes: {},
};

export default FormDemoMeta;
type FormDemoStory = StoryObj<typeof FormDemoMeta>;

export const Default: FormDemoStory = {
	argTypes: {
		username: {
			description: "String, min 12-charecter",
			type: { name: "string", required: true },
			table: {
				defaultValue: { summary: "" },
			},
		},
		password: {
			description:
				"Password, min 12-charecter, one capital letter, number and symbol at least.",
			type: { name: "string", required: true },
			table: {
				defaultValue: { summary: "" },
			},
		},
	},
	render: (args: any) => <ProfileForm {...args} />,
};
