import React from "react";
import { ThemeProvider } from "styled-components";
import _ from "lodash";
import { HelmetProvider } from "react-helmet-async";

import { theme as defaultTheme } from "./styles";
import { GameBoardContainer } from "./components/container";
import { GameStateProvider } from "./state";
import AppGlobalStyles from "./AppGlobalStyles";
import AppHelemt from "./AppHelmet";
import fallbackCards from "./state/fallbackCards";

const mergeConfigs = (config1, config2) => _.merge(config1, config2);

const App = ({ cards = fallbackCards, customTheme }) => (
	<HelmetProvider>
		<ThemeProvider theme={mergeConfigs(defaultTheme, customTheme)}>
			<AppHelemt />
			<AppGlobalStyles />
			<GameStateProvider cards={cards}>
				<GameBoardContainer />
			</GameStateProvider>
		</ThemeProvider>
	</HelmetProvider>
);

App.defaultTheme = defaultTheme;

export default App;
