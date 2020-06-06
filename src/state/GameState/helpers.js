import { starWarsDataService } from "../../services";

const shuffleCards = (cards) => cards.sort(() => Math.random() - 0.5);
const splitCardsInHalf = (cards) => {
	if (cards.length % 2 === 1) {
		cards.pop();
	}
	const firstHalf = [];
	const secondHalf = [];

	cards.forEach((card, index) => {
		if (index % 2 === 0) {
			firstHalf.push(card);
		} else {
			secondHalf.push(card);
		}
	});

	return [firstHalf, secondHalf];
};

export const setStarWarsCards = async (value, setValue) => {
	const cards = await starWarsDataService.getStarShips();
	const shuffledCards = shuffleCards(cards);
	const [playerCards, computerCards] = splitCardsInHalf(shuffledCards);
	setValue({
		...value,
		loading: false,
		player: {
			currentCard: playerCards[0],
			cards: playerCards,
		},
		computer: {
			currentCard: computerCards[0],
			cards: computerCards,
		},
	});
};
