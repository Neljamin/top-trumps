import React, { useState, useEffect, useReducer, createContext } from "react";

import reducer from "./reducer";
import initialState from "./initialState";
import actions from "./actions";
import { setStarWarsCards } from "./helpers";

export const GameStateContext = createContext({});

export function GameStateProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	const initialValue = {
		loading: state.loading,
		player: state.player,
		computer: state.computer,
	};
	const [value, setValue] = useState(initialValue);

	useEffect(() => {
		setStarWarsCards(value, setValue);
	}, []);

	return (
		<GameStateContext.Provider value={value}>
			{children}
		</GameStateContext.Provider>
	);
}
