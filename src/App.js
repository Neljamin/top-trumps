import React from "react";
import { ThemeProvider } from "styled-components";

import { theme as defaultTheme } from "./styles";
import { GameStateProvider, GameBoardContainer } from "./components/container";

const App = () => (
	<ThemeProvider theme={defaultTheme}>
		<GameStateProvider>
			<GameBoardContainer />
		</GameStateProvider>
	</ThemeProvider>
);

export default App;
