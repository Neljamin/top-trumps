import _ from "lodash";

import actions from "./actions";
import { shuffleCards, splitCardsInHalf, getCardsForRounds } from "./helpers";
import config from "../../environment/config";

const setCards = (state, cards) => {
	const { user, computer } = state;
	const cardsForGame = getCardsForRounds(cards, config.numberOfRounds);
	const shuffledCards = shuffleCards(cardsForGame);
	const [userCards, computerCards] = splitCardsInHalf(shuffledCards);
	return {
		...state,
		loading: false,
		gameOver: false,
		currentRound: 1,
		totalRounds: config.numberOfRounds,
		allCards: cards,
		user: {
			...user,
			readonly: false,
			showCard: true,
			currentCard: userCards[0],
			cards: userCards,
			score: userCards.length,
			state: undefined,
		},
		computer: {
			...computer,
			readonly: true,
			currentCard: computerCards[0],
			cards: computerCards,
			score: computerCards.length,
			showCard: false,
			state: undefined,
		},
	};
};

const handleCategoryClick = (state, category) => {
	const { user, computer } = state;
	const newUser = { ...user };
	const newComputer = { ...computer };
	const userAmount = user.currentCard.categories[category];
	const computerAmount = computer.currentCard.categories[category];
	if (userAmount < computerAmount) {
		newUser.state = "lose";
		newUser.score = user.score - 1;
		newComputer.state = "win";
		newComputer.score = computer.score + 1;
	} else if (userAmount > computerAmount) {
		newUser.state = "win";
		newUser.score = user.score + 1;
		newComputer.state = "lose";
		newComputer.score = computer.score - 1;
	} else {
		newUser.state = "draw";
		newComputer.state = "draw";
	}

	_.remove(newUser.cards, (card) => card.id === newUser.currentCard.id);
	_.remove(newComputer.cards, (card) => card.id === newComputer.currentCard.id);

	return {
		...state,
		user: {
			...newUser,
			readonly: true,
		},
		computer: {
			...newComputer,
			showCard: true,
		},
		selectedCategory: category,
	};
};

const startNewRound = (state) => {
	const { user, computer, currentRound, totalRounds } = state;
	const newUser = { ...user };
	const newComputer = { ...computer };
	const nextRound = currentRound + 1;

	if (nextRound > totalRounds) {
		return {
			...state,
			gameOver: true,
		};
	}

	newUser.currentCard = newUser.cards[0];
	newComputer.currentCard = newComputer.cards[0];

	return {
		...state,
		currentRound: nextRound,
		user: {
			...newUser,
			showCard: true,
			readonly: false,
		},
		computer: {
			...newComputer,
			showCard: false,
			readonly: true,
		},
		selectedCategory: undefined,
	};
};

const hideCards = (state) => {
	const { user, computer } = state;
	return {
		...state,
		user: {
			...user,
			showCard: false,
			state: undefined,
		},
		computer: {
			...computer,
			showCard: false,
			state: undefined,
		},
	};
};

const newGame = (state) => {
	return setCards(state, state.allCards);
};

export default function reducer(state, action) {
	switch (action.type) {
		case actions.SET_CARDS:
			return setCards(state, action.value);
		case actions.HANDLE_CATEGORY_CLICK:
			return handleCategoryClick(state, action.value);
		case actions.START_NEW_ROUND:
			return startNewRound(state);
		case actions.HIDE_CARDS:
			return hideCards(state);
		case actions.NEW_GAME:
			return newGame(state);
		default:
			return state;
	}
}
