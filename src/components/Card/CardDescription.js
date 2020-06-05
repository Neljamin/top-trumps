import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { breakpoints } from "../../styles";

const ICON_MAP = {
	user: "fa-user",
	computer: "fa-robot",
};

const StyledCardDescription = styled.div`
	display: flex;
	padding: 8px 0;
`;

const StyledCardDescriptionIcon = styled.div`
	height: 32px;
	width: 32px;
	font-size: 32px;

	@media ${breakpoints.tablet} {
		height: 48px;
		width: 48px;
		font-size: 48px;
	}
`;

const StyledCardDescriptionInfo = styled.div`
	padding: 0 8px;
	text-align: right;
`;

const StyledCardDescriptionTitle = styled.h1`
	font-size: 24px;
	font-weight: 600;
`;

const CardDescription = ({ title, info, type }) => (
	<StyledCardDescription>
		<StyledCardDescriptionIcon>
			<i className={`fa ${ICON_MAP[type]}`} />
		</StyledCardDescriptionIcon>
		<StyledCardDescriptionInfo>
			<StyledCardDescriptionTitle>{title}</StyledCardDescriptionTitle>
			{info.map((infoItem, index) => (
				<span key={index}>{infoItem}</span>
			))}
		</StyledCardDescriptionInfo>
	</StyledCardDescription>
);

CardDescription.propTypes = {
	title: PropTypes.string.isRequired,
	info: PropTypes.arrayOf(PropTypes.string),
	type: PropTypes.oneOf(["user", "computer"]).isRequired,
};

export default CardDescription;
