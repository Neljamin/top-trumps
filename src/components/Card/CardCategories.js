import React from "react";
import styled from "styled-components";

const StyledCardCategories = styled.div`
	padding: 16px 0;
`;

const StyledCardCategory = styled.div`
	display: flex;
    padding: 4px 0;
    margin-bottom: 2px;
	justify-content: space-between;
	border: 1px #ccc solid;
`;

const StyledCardCategoryLabel = styled.div`
	display: block;
	padding-left: 4px;
`;

const StyledCardCategoryValue = styled.div`
	width: auto;
	padding-right: 4px;
`;

const CardCategories = ({ categories }) => (
	<StyledCardCategories>
		{categories.map((category, index) => (
			<StyledCardCategory key={index}>
				<StyledCardCategoryLabel>
					{category.label}
				</StyledCardCategoryLabel>
				<StyledCardCategoryValue>
					{category.value}
				</StyledCardCategoryValue>
			</StyledCardCategory>
		))}
	</StyledCardCategories>
);

CardCategories.defaultProps = {
	categories: [],
};

export default CardCategories;
