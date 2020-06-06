import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import _ from "lodash";

const StyledCardCategories = styled.div`
	padding: 16px 0;
`;

const StyledCardCategory = styled.button`
	display: flex;
	width: 100%;
	padding: 4px 0;
	margin-bottom: 2px;
	justify-content: space-between;
	border: 1px #ccc solid;
	background-color: white;
	color: black;
	text-align: left;

	&:disabled {
		background-color: white;
		color: black;
	}

	${(props) => {
		const stateProps = _.get(props, ["theme", "gameState", props.state], {});
		return css`
			background-color: ${stateProps.background};
			color: ${stateProps.text};

			&:disabled {
				background-color: ${stateProps.background};
				color: ${stateProps.text};
			}
		`;
	}};
`;

const StyledCardCategoryLabel = styled.div`
	padding-left: 4px;
`;

const StyledCardCategoryValue = styled.div`
	width: auto;
	padding-right: 4px;
`;

const CardCategories = ({
	categories,
	readonly,
	handleCategoryClick,
	state,
	selectedCategory
}) => (
	<StyledCardCategories>
		{Object.entries(categories).map(([key, value], index) => (
			<StyledCardCategory
				key={index}
				disabled={readonly}
				onClick={() => handleCategoryClick(key)}
				state={selectedCategory === key && state}
			>
				<StyledCardCategoryLabel>{key}</StyledCardCategoryLabel>
				<StyledCardCategoryValue>{value}</StyledCardCategoryValue>
			</StyledCardCategory>
		))}
	</StyledCardCategories>
);

CardCategories.propTypes = {
	categories: PropTypes.object,
	readonly: PropTypes.bool,
	handleCategoryClick: (props, propName) => {
		if (!props.readonly && !_.isFunction(props[propName])) {
			throw new Error("handleCategoryClick must be provided if not readonly");
		}
	},
	state: PropTypes.oneOf(["win", "lose", "draw", "unplayed"]),
	selectedCategory: PropTypes.string,
};

CardCategories.defaultProps = {
	categories: {},
	readonly: true,
	state: "unplayed",
	selectedCategory: "",
};

export default CardCategories;
