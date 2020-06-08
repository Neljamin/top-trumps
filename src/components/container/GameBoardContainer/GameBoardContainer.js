import React, { useContext } from "react";

import { PlayArea, Card, GameBoard } from "../../presentational";
import { GameStateContext } from "../../../state";

export default function GameBoardContainer() {
	const {
		loading,
		user,
		computer,
		handleCategoryClick,
		selectedCategory,
		startNewRound,
		hideCards,
		totalRounds,
		currentRound,
		gameOver,
		newGame,
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
			gameOver={gameOver}
			state={user.state}
			totalRounds={totalRounds}
			currentRound={currentRound}
			computer={computer}
			user={user}
			playAgain={newGame}
		>
			<PlayArea type="user" score={user.score}>
				<Card
					show={user.showCard}
					state={user.state}
					type="user"
					data={user.currentCard}
					handleCategoryClick={startNewRoundAfterCategoryClick}
					readonly={user.readonly}
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
