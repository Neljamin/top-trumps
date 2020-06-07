import React, { useContext } from "react";

import { PlayArea, Card, GameBoard } from "../../presentational";
import { GameStateContext } from "../../../state";

export default function GameBoardContainer() {
	const {
		loading,
		player,
		computer,
		handleCategoryClick,
		selectedCategory,
		startNewRound,
		hideCards,
		totalRounds,
		currentRound,
	} = useContext(GameStateContext);

	if (loading) {
		return null;
	}

	const startNewRoundAfterCategoryClick = (category) => {
		handleCategoryClick(category);
		setTimeout(() => {
			hideCards();
			setTimeout(() => {
				startNewRound();
			}, 1000);
		}, 3000);
	};

	return (
		<GameBoard
			state={player.state}
			totalRounds={totalRounds}
			currentRound={currentRound}
		>
			<PlayArea type="user" score={player.score}>
				<Card
					show={player.showCard}
					state={player.state}
					type="user"
					data={player.currentCard}
					handleCategoryClick={startNewRoundAfterCategoryClick}
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
