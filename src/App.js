import React from "react";
import { ThemeProvider } from "styled-components";

import { theme as defaultTheme } from "./styles";
import { GameBoardContainer } from "./components/container";
import { GameStateProvider } from "./state";
import AppGlobalStyles from "./AppGlobalStyles";

const App = () => (
	<ThemeProvider theme={defaultTheme}>
		<AppGlobalStyles />
		<GameStateProvider>
			<GameBoardContainer />
		</GameStateProvider>
	</ThemeProvider>
);

export default App;
