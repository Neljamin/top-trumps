import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import _ from "lodash";

import iconMap from "./iconMap";

const StyledCardBackFace = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	align-items: center;
	justify-content: center;
	border: 1px solid #ccc;
	border-radius: 10px;
	background-color: ${(props) =>
		_.get(props.theme, [props.type, "backFace", "innerBackgroundColor"])};
	background-image: url(${(props) =>
		_.get(props.theme, [props.type, "backFace", "innerBackgroundImage"], "")});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: 50% 50%;
`;

const StyledCardBackFaceIcon = styled.div`
	display: flex;
	height: 128px;
	width: 128px;
	align-items: center;
	justify-content: center;
	font-size: 64px;
	background-color: ${(props) =>
		_.get(props.theme, [props.type, "backFace", "avatarIconColor"])};
	color: white;
	border-radius: 50%;
`;

const CardBackFace = ({ type }) => (
	<StyledCardBackFace type={type}>
		<StyledCardBackFaceIcon type={type}>
			<FontAwesomeIcon icon={iconMap[type]} />
		</StyledCardBackFaceIcon>
	</StyledCardBackFace>
);

CardBackFace.propTypes = {
	type: PropTypes.oneOf(Object.keys(iconMap)).isRequired,
};

export default CardBackFace;
