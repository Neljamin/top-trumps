import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import iconMap from "./iconMap";

const StyledCardBackFace = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	align-items: center;
	justify-content: center;
	border: 1px solid #ccc;
	border-radius: 10px;
`;

const StyledCardBackFaceIcon = styled.div`
	display: flex;
	height: 128px;
	width: 128px;
	align-items: center;
	justify-content: center;
	font-size: 64px;
	background-color: #777;
	color: white;
	border-radius: 50%;
`;

const CardBackFace = ({ type }) => (
	<StyledCardBackFace>
		<StyledCardBackFaceIcon>
			<i className={`fa ${iconMap[type]}`} />
		</StyledCardBackFaceIcon>
	</StyledCardBackFace>
);

CardBackFace.propTypes = {
	type: PropTypes.oneOf(Object.keys(iconMap)).isRequired,
};

export default CardBackFace;
