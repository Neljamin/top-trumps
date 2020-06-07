import React, { useEffect, useReducer, createContext } from "react";

import reducer from "./reducer";
import initialState from "./initialState";
import actions from "./actions";
import { starWarsDataService } from "../../services";

export const GameStateContext = createContext({});

export function GameStateProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	const value = {
		loading: state.loading,
		gameOver: state.gameOver,
		allCards: state.allCards,
		player: state.player,
		computer: state.computer,
		selectedCategory: state.selectedCategory,
		totalRounds: state.totalRounds,
		currentRound: state.currentRound,
		setCards: (value) => dispatch({ type: actions.SET_CARDS, value }),
		handleCategoryClick: (value) => dispatch({ type: actions.HANDLE_CATEGORY_CLICK, value }),
		startNewRound: () => dispatch({ type: actions.START_NEW_ROUND }),
		hideCards: () => dispatch({ type: actions.HIDE_CARDS }),
	};

	useEffect(() => {
		(async function loadCards() {
			const cards = await starWarsDataService.getStarShips();
			const tempoarilySetCards = [cards[0], cards[1]];
			value.setCards(tempoarilySetCards);
		})();
		// eslint-disable-next-line
	}, []);

	return (
		<GameStateContext.Provider value={value}>
			{children}
		</GameStateContext.Provider>
	);
}
