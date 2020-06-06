import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { breakpoints } from "../../../styles";
import CardDescription from "./CardDescription";
import CardCategories from "./CardCategories";

export const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1 0 0;
	height: 200px;
	width: 100%;
	padding: 0 16px;
	margin: 0 16px;
	max-width: 400px;
	border-radius: 20px;
	background-color: white;
	border: 1px solid #ccc;
	box-shadow: 8px 5px 0 rgba(0, 0, 0, 0.3), 11px 10px 0 rgba(0, 0, 0, 0.22);

	@media ${breakpoints.tablet} {
		height: 400px;
		max-width: 250px;
	}
`;

const Card = ({ type, data }) => (
	<StyledCard>
		<CardDescription type={type} title={data.title} info={data.info} />
		<CardCategories categories={data.categories} />
	</StyledCard>
);

Card.propTypes = {
	type: PropTypes.oneOf(["user", "computer"]),
	data: PropTypes.shape({
		title: PropTypes.string,
		info: PropTypes.arrayOf(PropTypes.string),
		categories: PropTypes.object,
	}),
};

Card.defaultProps = {
	type: "user",
	data: {
		title: "",
		categories: {},
		info: [],
	},
};

export default Card;
