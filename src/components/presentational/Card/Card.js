import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { breakpoints } from "../../../styles";
import CardDescription from "./CardDescription";
import CardCategories from "./CardCategories";
import CardBackFace from "./CardBackFace";

const StyledCard = styled.div`
	position: relative;
	min-height: 200px;
	width: 100%;
	max-width: 400px;
	margin: 0 16px;
	transform-style: preserve-3d;
	transition: transform 0.6s;
	transform: rotateY(${(props) => (props.show ? "0deg" : "180deg")});

	@media ${breakpoints.tablet} {
		min-height: 400px;
		max-width: 270px;
	}
`;

const StyledCardFace = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	display: flex;
	box-sizing: border-box;
	padding: 16px;
	height: 100%;
	width: 100%;
	flex-direction: column;
	backface-visibility: hidden;
	background-color: white;
	border-radius: 20px;
	box-shadow: 8px 5px 0 rgba(0, 0, 0, 0.3), 11px 10px 0 rgba(0, 0, 0, 0.22);
`;

const StyledCardFrontface = styled(StyledCardFace)``;

const StyledCardBackface = styled(StyledCardFace)`
	transform: rotateY(180deg);
`;

const Card = ({
	type,
	data,
	show,
	readonly,
	handleCategoryClick,
	state,
	selectedCategory,
}) => (
	<StyledCard show={show}>
		<StyledCardFrontface>
			<CardDescription type={type} title={data.title} info={data.info} />
			<CardCategories
				state={state}
				readonly={readonly}
				categories={data.categories}
				handleCategoryClick={handleCategoryClick}
				selectedCategory={selectedCategory}
			/>
		</StyledCardFrontface>
		<StyledCardBackface>
			<CardBackFace type={type} />
		</StyledCardBackface>
	</StyledCard>
);

Card.propTypes = {
	show: PropTypes.bool,
	readonly: PropTypes.bool,
	handleCategoryClick: PropTypes.func,
	type: PropTypes.oneOf(["user", "computer"]),
	data: PropTypes.shape({
		title: PropTypes.string,
		info: PropTypes.arrayOf(PropTypes.string),
		categories: PropTypes.object,
	}),
	state: PropTypes.oneOf(["win", "lose", "draw", "unplayed"]),
	selectedCategory: PropTypes.string,
};

Card.defaultProps = {
	show: true,
	readonly: true,
	type: "user",
	data: {
		title: "",
		categories: {},
		info: [],
	},
};

export default Card;
