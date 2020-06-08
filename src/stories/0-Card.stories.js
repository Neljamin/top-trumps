import React from "react";
import { ThemeProvider } from "styled-components";
import {
	withKnobs,
	object as knobObject,
	boolean,
	text,
} from "@storybook/addon-knobs";

import { Card } from "../components/presentational";
import { theme } from "../styles";
import "../index.scss";
import "../reset.scss";

export default {
	title: "Card",
	component: Card,
	decorators: [withKnobs],
};

const data = {
	title: "Sample Card",
	info: ["Card Info"],
	categories: {
		Category1: 12,
		Category2: 34,
		Category3: 24,
		Category4: 13,
	},
};

const getCardType = (type) => (
	<ThemeProvider theme={theme}>
		<Card
			type={type}
			show={boolean("Show", true)}
			readonly={boolean("Readonly", true)}
			data={knobObject("Data", data)}
			state={text("State", "")}
			selectedCategory={text("Selected Category", "")}
		/>
	</ThemeProvider>
);

export const UserCardStory = () => getCardType("user");

UserCardStory.story = {
	name: "User",
	parameters: {
		backgrounds: [
			{ name: "user", value: theme.user.background, default: true },
			{ name: "computer", value: theme.computer.background },
		],
	},
};

export const ComputerCardStory = () => getCardType("computer");

ComputerCardStory.story = {
	name: "Computer",
	parameters: {
		backgrounds: [
			{ name: "user", value: theme.user.background, default: true },
			{ name: "computer", value: theme.computer.background },
		],
	},
};
