import _ from "lodash";

import actions from "./actions";
import { shuffleCards, splitCardsInHalf } from "./helpers";

const setCards = (state, cards) => {
	const { player, computer } = state;
	const shuffledCards = shuffleCards(cards);
	const [playerCards, computerCards] = splitCardsInHalf(shuffledCards);
	return {
		...state,
		loading: false,
		allCards: cards,
		player: {
			...player,
			readonly: false,
			showCard: true,
			currentCard: playerCards[0],
			cards: playerCards,
			score: playerCards.length,
		},
		computer: {
			...computer,
			readonly: true,
			currentCard: computerCards[0],
			cards: computerCards,
			score: computerCards.length,
		},
	};
};

const handleCategoryClick = (state, category) => {
	const { player, computer } = state;
	const newPlayer = { ...player };
	const newComputer = { ...computer };
	const playerAmount = player.currentCard.categories[category];
	const computerAmount = computer.currentCard.categories[category];
	if (playerAmount < computerAmount) {
		newPlayer.state = "lose";
		newPlayer.score = player.score - 1;
		newComputer.state = "win";
		newComputer.score = computer.score + 1;
	} else if (playerAmount > computerAmount) {
		newPlayer.state = "win";
		newPlayer.score = player.score + 1;
		newComputer.state = "lose";
		newComputer.score = computer.score - 1;
	} else {
		newPlayer.state = "draw";
		newComputer.state = "draw";
	}

	_.remove(newPlayer.cards, (card) => card.id === newPlayer.currentCard.id);
	_.remove(newComputer.cards, (card) => card.id === newComputer.currentCard.id);

	return {
		...state,
		player: {
			...player,
			...newPlayer,
			readonly: true,
		},
		computer: {
			...computer,
			...newComputer,
			showCard: true,
		},
		selectedCategory: category,
	};
};

export default function reducer(state, action) {
	switch (action.type) {
		case actions.SET_CARDS:
			return setCards(state, action.value);
		case actions.HANDLE_CATEGORY_CLICK:
			return handleCategoryClick(state, action.value);
		default:
			return state;
	}
}
