import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faSadTear, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const MESSAGES = {
	win: {
		title: "You Won!",
		subtitle: "You sure showed the computer who's boss.",
	},
	lose: {
		title: "You Lost!",
		subtitle: "Better luck next time.",
	},
	draw: {
		title: "You Drew!",
		subtitle: "Close one!",
	},
};

const ICONS = {
	win: faTrophy,
	lose: faSadTear,
	draw: faPencilAlt,
};

const StyledGameOverScreen = styled.div`
	position: absolute;
	display: flex;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	align-items: center;
	justify-content: center;
	transition: transform 1.2s, background-color 1.2s;
	transform: translateY(${(props) => (props.gameOver ? "0" : "-100%")});

	${(props) => {
		const stateProps = _.get(props, ["theme", "gameState", props.state], {});
		return css`
			background-color: ${stateProps.background};
			color: ${stateProps.text};
		`;
	}};
`;

const StyledGameOverScreenMessage = styled.div`
	position: relative;
	display: flex;
	height: 400px;
	width: 320px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

const StyledGameOverScreenMessageTitle = styled.h1`
	font-size: 32px;
	line-height: 48px;
`;

const StyledGameOverScreenMessageSubtitle = styled.h1`
	font-size: 16px;
	line-height: 16px;
`;

const StyledGameOverScreenMessageIcon = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	height: 64px;
	width: 64px;
	font-size: 64px;
`;

const StyledPlayAgainButton = styled.button`
	margin: 16px 0;
	padding: 8px;
	border: none;
	border-radius: 3px;
	background-color: white;
	color: #777;
	cursor: pointer;
	box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.3), 5px 4px 0 rgba(0, 0, 0, 0.22);
`;

const getEndGameState = (user, computer) => {
	if (user.score < computer.score) {
		return "lose";
	} else if (user.score > computer.score) {
		return "win";
	} else if (user.score === computer.score) {
		return "draw";
	}
};

const GameBoardGameOver = ({ computer, user, gameOver, playAgain }) => {
	const state = getEndGameState(user, computer);
	return (
		<StyledGameOverScreen state={state} gameOver={gameOver}>
			{gameOver && (
				<StyledGameOverScreenMessage>
					<StyledGameOverScreenMessageTitle>
						{MESSAGES[state].title}
					</StyledGameOverScreenMessageTitle>
					<StyledGameOverScreenMessageSubtitle>
						{MESSAGES[state].subtitle}
					</StyledGameOverScreenMessageSubtitle>

					<StyledGameOverScreenMessageIcon>
						<FontAwesomeIcon icon={ICONS[state]} />
					</StyledGameOverScreenMessageIcon>

					<StyledPlayAgainButton onClick={playAgain}>
						Play Again?
					</StyledPlayAgainButton>
				</StyledGameOverScreenMessage>
			)}
		</StyledGameOverScreen>
	);
};

GameBoardGameOver.propType = {
	computer: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired,
	gameOver: PropTypes.bool.isRequired,
	playAgain: PropTypes.func,
};

export default GameBoardGameOver;
