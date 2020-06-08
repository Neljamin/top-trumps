import React from "react";
import styled, { css } from "styled-components";
import _ from "lodash";
import PropTypes from "prop-types";

import { breakpoints } from "../../../styles";
import GameBoardGameOver from "./GameBoardGameOver";

const STATE_MESSAGE = {
	unplayed: "?",
	win: "You Win!",
	lose: "You Lose!",
	draw: "You Draw!",
	gameOver: "Game Over!",
};

const StyledGameBoard = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	height: 100vh;
	width: 100vw;

	@media ${breakpoints.tablet} {
		flex-direction: row;
	}
`;

const StyledGameBoardStatus = styled.span`
	position: absolute;
	display: flex;
	height: 64px;
	width: 64px;
	top: calc(50% - 32px);
	left: calc(50% - 32px);
	justify-content: center;
	align-items: center;
	text-align: center;
	border: 1px solid #ccc;
	border-radius: 50%;
	font-weight: 500;
	box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3), 2px 2px 0 rgba(0, 0, 0, 0.22);

	${(props) => {
		const stateProps = _.get(props, ["theme", "gameState", props.state], {});
		return css`
			background-color: ${stateProps.background};
			color: ${stateProps.text};
		`;
	}};
`;

const StyledRoundCounter = styled.span`
	position: absolute;
	top: 0;
	right: 0;
	box-sizing: border-box;
	padding: 8px;
`;

const GameBoard = ({
	children,
	state,
	currentRound,
	totalRounds,
	gameOver,
	computer,
	user,
	playAgain,
}) => (
	<StyledGameBoard>
		{children}
		<StyledGameBoardStatus state={state}>
			{STATE_MESSAGE[state]}
		</StyledGameBoardStatus>
		<StyledRoundCounter>
			Round {currentRound} / {totalRounds}
		</StyledRoundCounter>
		<GameBoardGameOver
			playAgain={playAgain}
			gameOver={gameOver}
			computer={computer}
			user={user}
		/>
	</StyledGameBoard>
);

GameBoard.propType = {
	state: PropTypes.oneOf(["win", "lose", "draw", "unplayed"]),
	currentRound: PropTypes.number,
	totalRounds: PropTypes.number,
	gameOver: PropTypes.bool.isRequired,
	user: PropTypes.object,
	computer: PropTypes.object,
	playAgain: PropTypes.func,
};

GameBoard.defaultProps = {
	state: "unplayed",
};

export default GameBoard;
