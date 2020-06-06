import React, { useReducer, createContext } from "react";

import reducer from "./reducer";
import initialState from "./initialState";
import actions from "./actions";

export const GameStateContext = createContext({});

export function GameStateProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	const value = {
		count: state.count,
		setCount: (value) => dispatch({ type: actions.SET_COUNT, value }),
	};

	return (
		<GameStateContext.Provider value={value}>
			{children}
		</GameStateContext.Provider>
	);
}
