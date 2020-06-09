import React from "react";
import { ThemeProvider } from "styled-components";

import { theme as defaultTheme } from "./styles";
import { GameBoardContainer } from "./components/container";
import { GameStateProvider } from "./state";
import AppGlobalStyles from "./AppGlobalStyles";
import fallbackCards from "./state/fallbackCards";

const App = ({ cards = fallbackCards }) => (
	<ThemeProvider theme={defaultTheme}>
		<AppGlobalStyles />
		<GameStateProvider cards={cards}>
			<GameBoardContainer />
		</GameStateProvider>
	</ThemeProvider>
);

export default App;
