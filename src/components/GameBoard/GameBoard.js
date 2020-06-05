import React from "react";
import styled from "styled-components";

import { breakpoints } from "../../styles";

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
	background-color: #fafafa;
	border: 1px solid #ccc;
	border-radius: 50%;
`;

const GameBoard = ({ children }) => (
	<StyledGameBoard>
		{children}
		<SytledGameBoardStatus>You Lose!</SytledGameBoardStatus>
	</StyledGameBoard>
);

export default GameBoard;
