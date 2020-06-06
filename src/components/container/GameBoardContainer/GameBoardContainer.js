import React, { useContext, useState } from "react";
import _ from "lodash";

import { PlayArea, Card, GameBoard } from "../../presentational";
import { GameStateContext } from "../../../state";

export default function GameBoardContainer() {
	const { loading, player, computer } = useContext(GameStateContext);
	const [ showComputerCard, changeShowComputerCard ] = useState(false);
	const [ playerCardReadonly, changePlayerCardReadonly] = useState(false);
	const [ playerGameState, changePlayerGameState] = useState("unplayed");
	const [ computerGameState, changeComputerGameState] = useState("unplayed");
	const [ selectedCategory, changeSelectedCategory] = useState("");

	if (loading) {
		return null;
	}

	const handleCategoryClick = (category) => {
		changeShowComputerCard(true);
		changePlayerCardReadonly(true);
		changeSelectedCategory(category);
		const playerAmount = player.currentCard.categories[category];
		const computerAmount = computer.currentCard.categories[category];
		if (playerAmount < computerAmount) {
			changePlayerGameState("lose");
			changeComputerGameState("win");
		} else if (playerAmount > computerAmount) {
			changePlayerGameState("win");
			changeComputerGameState("lose");
		} else {
			changePlayerGameState("draw");
			changeComputerGameState("draw");
		}
	};

	return (
		<GameBoard state={playerGameState}>
			<PlayArea type="user" score={player.cards.length}>
				<Card
					show={true}
					state={playerGameState}
					type="user"
					data={player.currentCard}
					handleCategoryClick={handleCategoryClick}
					readonly={playerCardReadonly}
					selectedCategory={selectedCategory}
				></Card>
			</PlayArea>
			<PlayArea type="computer" score={computer.cards.length}>
				<Card
					show={showComputerCard}
					state={computerGameState}
					type="computer"
					data={computer.currentCard}
					readonly={true}
					selectedCategory={selectedCategory}
				></Card>
			</PlayArea>
		</GameBoard>
	);
}
