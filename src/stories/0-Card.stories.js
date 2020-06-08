import React from "react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import { Card } from "../components/presentational";
import { theme } from "../styles";

export default {
	title: "Widgets",
	component: Card,
	decorators: [withKnobs],
};
// type,
// data,
// show,
// readonly,
// handleCategoryClick,
// state,
// selectedCategory,

export const CardStory = () => <Card type="user" />;

CardStory.story = {
	name: "Card",
	parameters: {
		backgrounds: [
			{ name: "user", value: theme.user.background, default: true },
			{ name: "computer", value: theme.computer.background },
		],
	},
};
