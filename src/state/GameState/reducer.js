import _ from "lodash";

import actions from "./actions";
import { shuffleCards, splitCardsInHalf, getCardsForRounds } from "./helpers";
import config from "../../environment/config";

const setCards = (state, cards) => {
	const { player, computer } = state;
	const cardsForGame = getCardsForRounds(cards, config.numberOfRounds);
	const shuffledCards = shuffleCards(cardsForGame);
	const [playerCards, computerCards] = splitCardsInHalf(shuffledCards);
	return {
		...state,
		loading: false,
		gameOver: false,
		currentRound: 1,
		totalRounds: config.numberOfRounds,
		allCards: cards,
		player: {
			...player,
			readonly: false,
			showCard: true,
			currentCard: playerCards[0],
			cards: playerCards,
			score: playerCards.length,
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
			...newPlayer,
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
	const { player, computer, currentRound, totalRounds } = state;
	const newPlayer = { ...player };
	const newComputer = { ...computer };
	const nextRound = currentRound + 1;

	if (nextRound > totalRounds) {
		return {
			...state,
			gameOver: true,
		};
	}

	newPlayer.currentCard = newPlayer.cards[0];
	newComputer.currentCard = newComputer.cards[0];

	return {
		...state,
		currentRound: nextRound,
		player: {
			...newPlayer,
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
	const { player, computer } = state;
	return {
		...state,
		player: {
			...player,
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
