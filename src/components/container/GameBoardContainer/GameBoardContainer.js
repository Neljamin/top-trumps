import React, { useContext, useState } from "react";
import _ from "lodash";

import { PlayArea, Card, GameBoard } from "../../presentational";
import { GameStateContext } from "../../../state";

export default function GameBoardContainer() {
	const { loading, player, computer } = useContext(GameStateContext);
	const [ showComputerCard, changeShowComputerCard ] = useState(false);
	const [ playerCardReadonly, changePlayerCardReadonly] = useState(false);
	const [ gameState, changeGameState] = useState("unplayed");

	if (loading) {
		return null;
	}

	const handleCategoryClick = (category) => {
		changeShowComputerCard(true);
		changePlayerCardReadonly(true);
		const playerAmount = player.currentCard.categories[category];
		const computerAmount = computer.currentCard.categories[category];
		if (playerAmount < computerAmount) {
			changeGameState("lose");
		} else if (playerAmount > computerAmount) {
			changeGameState("win");
		} else {
			changeGameState("draw");
		}
	};

	return (
		<GameBoard state={gameState}>
			<PlayArea type="user" score={player.cards.length}>
				<Card
					show={true}
					type="user"
					data={player.currentCard}
					handleCategoryClick={handleCategoryClick}
					readonly={playerCardReadonly}
				></Card>
			</PlayArea>
			<PlayArea type="computer" score={computer.cards.length}>
				<Card
					show={showComputerCard}
					type="computer"
					data={computer.currentCard}
					readonly={true}
				></Card>
			</PlayArea>
		</GameBoard>
	);
}
