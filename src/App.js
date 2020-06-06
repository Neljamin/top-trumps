import React from "react";
import { ThemeProvider } from "styled-components";

import { theme as defaultTheme } from "./styles";
import { GameBoardContainer } from "./components/container";
import { GameStateProvider } from "./state";

const App = () => (
	<ThemeProvider theme={defaultTheme}>
		<GameStateProvider>
			<GameBoardContainer />
		</GameStateProvider>
	</ThemeProvider>
);

export default App;
