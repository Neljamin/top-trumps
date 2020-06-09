import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import _ from "lodash";

import { breakpoints } from "../../../styles";
import iconMap from "./iconMap";

const StyledCardDescription = styled.div`
	display: flex;
	color: ${props =>  _.get(props.theme, [props.type, 'frontFace', 'textColor'])};
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
	font-size: 14px;
`;

const StyledCardDescriptionTitle = styled.h1`
	font-size: 14px;
	line-height: 16px;
	font-weight: 600;
`;

const CardDescription = ({ title, info, type }) => (
	<StyledCardDescription type={type}>
		<StyledCardDescriptionIcon>
			<FontAwesomeIcon icon={iconMap[type]} />
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
	type: PropTypes.oneOf(Object.keys(iconMap)).isRequired,
};

CardDescription.defaultProps = {
	title: "",
	info: [],
};

export default CardDescription;
