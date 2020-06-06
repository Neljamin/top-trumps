import React, { useReducer, createContext } from "react";

import reducer from "./reducer";
import initialState from "./initialState";
import actions from "./actions";

export const GameStateContext = createContext({});

export function GameStateProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	const value = {
		playerCard: state.playerCard,
		computerCard: state.computerCard,
	};

	return (
		<GameStateContext.Provider value={value}>
			{children}
		</GameStateContext.Provider>
	);
}
