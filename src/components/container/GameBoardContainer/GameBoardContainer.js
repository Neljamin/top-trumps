import React, { useContext } from "react";
import _ from "lodash";

import { PlayArea, Card, GameBoard } from "../../presentational";
import { GameStateContext } from "../../../state";

export default function GameBoardContainer() {
	const {
		loading,
		player,
		computer,
		handleCategoryClick,
		allCards,
		selectedCategory,
	} = useContext(GameStateContext);

	if (loading) {
		return null;
	}

	return (
		<GameBoard state={player.state}>
			<PlayArea type="user" score={player.score}>
				<Card
					show={player.showCard}
					state={player.state}
					type="user"
					data={player.currentCard}
					handleCategoryClick={handleCategoryClick}
					readonly={player.readonly}
					selectedCategory={selectedCategory}
				></Card>
			</PlayArea>
			<PlayArea type="computer" score={computer.score}>
				<Card
					show={computer.showCard}
					state={computer.state}
					type="computer"
					data={computer.currentCard}
					readonly={true}
					selectedCategory={selectedCategory}
				></Card>
			</PlayArea>
		</GameBoard>
	);
}
