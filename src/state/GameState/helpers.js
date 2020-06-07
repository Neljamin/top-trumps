export const shuffleCards = (cards) => cards.sort(() => Math.random() - 0.5);
export const splitCardsInHalf = (cards) => {
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
