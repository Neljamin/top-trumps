import React, { useReducer, createContext } from "react";

import reducer, { setCards } from "./reducer";
import initialState from "./initialState";
import actions from "./actions";

export const GameStateContext = createContext({});

export function GameStateProvider({ children, cards }) {
	const [state, dispatch] = useReducer(reducer, setCards(initialState, cards));

	const value = {
		loading: state.loading,
		gameOver: state.gameOver,
		allCards: state.allCards,
		user: state.user,
		computer: state.computer,
		selectedCategory: state.selectedCategory,
		totalRounds: state.totalRounds,
		currentRound: state.currentRound,
		setCards: (value) => dispatch({ type: actions.SET_CARDS, value }),
		handleCategoryClick: (value) =>
			dispatch({ type: actions.HANDLE_CATEGORY_CLICK, value }),
		startNewRound: () => dispatch({ type: actions.START_NEW_ROUND }),
		hideCards: () => dispatch({ type: actions.HIDE_CARDS }),
		newGame: (value) => dispatch({ type: actions.NEW_GAME, value }),
	};

	return (
		<GameStateContext.Provider value={value}>
			{children}
		</GameStateContext.Provider>
	);
}
