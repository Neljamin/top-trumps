import React from "react";

import { PlayArea, Card, GameBoard } from "../../presentational";
import { GameStateContext } from "../../../state";

export default function GameBoardContainer() {
	const { playerCard, computerCard } = React.useContext(GameStateContext);

	return (
		<GameBoard>
			<PlayArea type="user" score="5">
				<Card type="user" data={playerCard}></Card>
			</PlayArea>
			<PlayArea type="computer" score="3">
				<Card type="computer" data={computerCard}></Card>
			</PlayArea>
		</GameBoard>
	);
}
