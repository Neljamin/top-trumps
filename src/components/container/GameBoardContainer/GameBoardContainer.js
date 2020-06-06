import React from "react";

import { PlayArea, Card, GameBoard } from "../../presentational";

const dummyUserCardData = {
	title: "CR90 corvette",
	info: ["corvette"],
	categories: [
		{
			label: "Max Speed",
			value: "950",
		},
		{
			label: "Cost in Credits",
			value: "3500000",
		},
		{
			label: "Passengers",
			value: "600",
		},
		{
			label: "Number of Films",
			value: "3",
		},
	],
};

const dummyComputerCardData = {
	title: "???",
	info: ["???"],
	categories: [
		{
			label: "Max Speed",
			value: "???",
		},
		{
			label: "Cost in Credits",
			value: "???",
		},
		{
			label: "Passengers",
			value: "???",
		},
		{
			label: "Number of Films",
			value: "???",
		},
	],
};

export default function GameBoardContainer() {
	return (
		<GameBoard>
			<PlayArea type="user" score="5">
				<Card
					type="user"
					title={dummyUserCardData.title}
					info={dummyUserCardData.info}
					categories={dummyUserCardData.categories}
				></Card>
			</PlayArea>
			<PlayArea type="computer" score="3">
				<Card
					type="computer"
					title={dummyComputerCardData.title}
					info={dummyComputerCardData.info}
					categories={dummyComputerCardData.categories}
				></Card>
			</PlayArea>
		</GameBoard>
	);
}
