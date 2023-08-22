import type { Meta, StoryObj } from "@storybook/react";

import AccordionComponent from "./Accordion";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof AccordionComponent> = {
	title: "Components/AccordionComponent",
	component: AccordionComponent,
	tags: ["autodocs"],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Single: Story = {
	args: {
		type: "single",
		items: [
			{
				value: "First Item",
				trigger: "Is it Accesible?",
				content: <div>Hell yeah it is!</div>,
			},
			{
				value: "Second Item",
				trigger: "Is it Though?",
				content: <div>Hell yeah it is!</div>,
			},
			{
				value: "Third Item",
				trigger: "Is it.....?",
				content: <div>Hell yeah it is!</div>,
			},
		],
	},
	render: (args) => <AccordionComponent {...args} />,
};

export const Multiple: Story = {
	args: {
		type: "multiple",
		items: [
			{
				value: "First Item",
				trigger: "Is it Accesible?",
				content: <div>Hell yeah it is!</div>,
			},
			{
				value: "Second Item",
				trigger: "Is it Though?",
				content: <div>Hell yeah it is!</div>,
			},
			{
				value: "Third Item",
				trigger: "Is it.....?",
				content: <div>Hell yeah it is!</div>,
			},
		],
	},
	render: (args) => <AccordionComponent {...args} />,
};

// export const Destructive: Story = {
// 	args: {
// 		variant: "destructive",
// 		size: "default",
// 	},
// 	render: (args) => <AccordionComponent {...args}>Click</AccordionComponent>,
// };

// export const Outline: Story = {
// 	args: {
// 		variant: "outline",
// 		size: "default",
// 		className: "text-primary-700",
// 	},
// 	render: (args) => <AccordionComponent {...args}>Click</AccordionComponent>,
// };

// export const Secondary: Story = {
// 	args: {
// 		variant: "secondary",
// 		size: "default",
// 	},
// 	render: (args) => <AccordionComponent {...args}>Click</AccordionComponent>,
// };

// export const Ghost: Story = {
// 	args: {
// 		variant: "ghost",
// 		size: "default",
// 	},
// 	render: (args) => <AccordionComponent {...args}>Click</AccordionComponent>,
// };

// export const AsChild: Story = {
// 	args: {
// 		variant: "default",
// 		size: "default",
// 		asChild: true,
// 	},
// 	render: (args) => (
// 		<AccordionComponent {...args}>
// 			<div>Click Div</div>
// 		</AccordionComponent>
// 	),
// };
