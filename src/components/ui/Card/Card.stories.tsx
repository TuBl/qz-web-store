import type { Meta, StoryObj } from "@storybook/react";

import { CardComponent } from "./Card";
import { Icon } from "../AspectRatio/AspectRatio";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction

const CardMeta: Meta<typeof CardComponent> = {
	title: "Components/Card",
	component: CardComponent,
	tags: ["autodocs"],
	argTypes: {},
};

export default CardMeta;
type CardStory = StoryObj<typeof CardMeta>;

export const Default: CardStory = {
	args: {
		title: (
			<p>
				<Icon
					src='/images/hero.png'
					alt='hero'
					width={64}
					height={64}
				/>{" "}
				This is the card title
			</p>
		),
		description:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis eos distinctio aspernatur cumque quae obcaecati reiciendis quasi incidunt est qui? Nulla rerum aliquam dolorum nam aperiam. Dignissimos dolores distinctio veritatis sit nam voluptatum eum eos tenetur enim iure, suscipit nisi amet! Est officiis pariatur, aut asperiores omnis magnam laborum similique.",
		content:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo reprehenderit deserunt ab possimus a dignissimos commodi animi, nihil voluptas assumenda laborum minima accusantium illum. Tempore, quis minima dolorum alias animi fugit molestiae nemo consectetur vitae amet fugiat adipisci quisquam eveniet quae eius. Laudantium quasi dolore libero doloremque vero magnam eum. Reiciendis deserunt nobis, repellendus eum totam mollitia aut delectus sed explicabo maxime sunt doloremque atque at ullam magnam dolore earum quae inventore ipsa commodi quis.",
		footer: "Footer content",
	},

	render: (args: any) => <CardComponent {...args} />,
};
