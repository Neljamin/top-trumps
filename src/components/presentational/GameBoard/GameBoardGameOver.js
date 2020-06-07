import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import _ from "lodash";

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
    win: "fas fa-trophy",
    lose: "fas fa-sad-tear",
    draw: "fas fa-equals",
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
	transition: transform 1.2s;
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

const getEndGameState = (player, computer) => {
	if (player.score < computer.score) {
		return "lose";
	} else if (player.score > computer.score) {
		return "win";
	}
	return "draw";
};

const GameBoardGameOver = ({ computer, player, gameOver }) => {
    const state = getEndGameState(player, computer);

    return (
		<StyledGameOverScreen state={state} gameOver={gameOver}>
			<StyledGameOverScreenMessage>
				<StyledGameOverScreenMessageTitle>
					{MESSAGES[state].title}
				</StyledGameOverScreenMessageTitle>
				<StyledGameOverScreenMessageSubtitle>
					{MESSAGES[state].subtitle}
				</StyledGameOverScreenMessageSubtitle>
				{gameOver && (
					<StyledGameOverScreenMessageIcon>
						<i className={ICONS[state]} />
					</StyledGameOverScreenMessageIcon>
				)}
			</StyledGameOverScreenMessage>
		</StyledGameOverScreen>
	);
};

GameBoardGameOver.propType = {
	computer: PropTypes.object.isRequired,
	player: PropTypes.object.isRequired,
	gameOver: PropTypes.bool.isRequired,
};

export default GameBoardGameOver;
