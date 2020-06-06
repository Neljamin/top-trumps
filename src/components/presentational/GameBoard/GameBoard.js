import React from "react";
import styled, { css } from "styled-components";
import _ from "lodash";
import PropTypes from "prop-types";

import { breakpoints } from "../../../styles";

const STATE_MESSAGE = {
	unplayed: "?",
	win: "You Win!",
	lose: "You Lose!",
	draw: "You Draw!",
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

const SytledGameBoardStatus = styled.span`
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

const GameBoard = ({ children, state }) => (
	<StyledGameBoard>
		{children}
		<SytledGameBoardStatus state={state}>
			{STATE_MESSAGE[state]}
		</SytledGameBoardStatus>
	</StyledGameBoard>
);

GameBoard.propType = {
	state: PropTypes.oneOf(["win", "lose", "draw", "unplayed"]),
};

GameBoard.defaultProps = {
	state: "unplayed",
};

export default GameBoard;
