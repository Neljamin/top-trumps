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
		},
		computer: {
			...computer,
			readonly: true,
			currentCard: computerCards[0],
			cards: computerCards,
		},
	};
};

const handleCategoryClick = (state, category) => {
	const { player, computer } = state;
	const playerAmount = player.currentCard.categories[category];
	const computerAmount = computer.currentCard.categories[category];
	let playerState;
	let computerState;
	if (playerAmount < computerAmount) {
		playerState = "lose";
		computerState = "win";
	} else if (playerAmount > computerAmount) {
		playerState = "win";
		computerState = "lose";
	} else {
		playerState = "draw";
		computerState = "draw";
	}
	return {
		...state,
		player: {
			...player,
			readonly: true,
			state: playerState,
		},
		computer: {
			...computer,
			showCard: true,
			state: computerState,
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
