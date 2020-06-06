import React, { useContext } from "react";

import { PlayArea, Card, GameBoard } from "../../presentational";
import { GameStateContext } from "../../../state";

export default function GameBoardContainer() {
	const { loading, player, computer } = useContext(GameStateContext);

	if (loading) {
		return null;
	}

	return (
		<GameBoard>
			<PlayArea type="user" score={player.cards.length}>
				<Card type="user" data={player.currentCard}></Card>
			</PlayArea>
			<PlayArea type="computer" score={computer.cards.length}>
				<Card type="computer" data={computer.currentCard}></Card>
			</PlayArea>
		</GameBoard>
	);
}
