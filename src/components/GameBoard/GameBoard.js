import styled from "styled-components";

import { breakpoints } from "../../styles";

const GameBoard = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100vw;

	@media ${breakpoints.tablet} {
		flex-direction: row;
	}
`;

export default GameBoard;
