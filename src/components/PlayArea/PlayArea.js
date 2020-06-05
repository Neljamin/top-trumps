import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import _ from "lodash";

import { breakpoints } from "../../styles";

const StyledPlayArea = styled.div`
	display: flex;
	height: 100%;
	position: relative;
	justify-content: center;
	background: ${({ theme, type }) =>
		_.get(theme, [type, "background"], "white")};

	${(props) => {
		const top = props.position === "top";
		return css`
			align-items: ${top ? "flex-end" : "flex-start"};
			padding-bottom: ${top ? "50px" : "0px"};
			padding-top: ${top ? "0px" : "50px"};
		`;
	}};

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

const PlayArea = ({ children, type, score, position }) => (
	<StyledPlayArea type={type} position={position}>
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
	position: PropTypes.oneOf(["top", "bottom"]).isRequired,
};

export default PlayArea;
