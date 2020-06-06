import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import _ from "lodash";

import { breakpoints } from "../../../styles";

const StyledPlayArea = styled.div`
	display: flex;
	height: 100%;
	position: relative;
	justify-content: center;
	align-items: center;
	background: ${({ theme, type }) =>
		_.get(theme, [type, "background"], "white")};

	@media ${breakpoints.tablet} {
		padding: 0;
		align-items: center;
	}
`;

const StyledPlayAreaScore = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	padding: 8px;
`;

const StyledPlayAreaScoreLabel = styled.label`
	font-weight: 700;
`;

const StyledPlayAreaScoreValue = styled.span`
	padding: 0 8px;
`;

const PlayArea = ({ children, type, score }) => (
	<StyledPlayArea type={type}>
		<StyledPlayAreaScore>
			<StyledPlayAreaScoreLabel>Score:</StyledPlayAreaScoreLabel>
			<StyledPlayAreaScoreValue>{score}</StyledPlayAreaScoreValue>
		</StyledPlayAreaScore>
		{children}
	</StyledPlayArea>
);

PlayArea.propTypes = {
	type: PropTypes.string.isRequired,
	children: PropTypes.node,
	score: PropTypes.string,
};

export default PlayArea;
