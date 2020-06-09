const cards = [];

for (let i = 1; i < 11; i++) {
	cards.push({
		id: `${i}`,
		title: `Test Card ${i}`,
		info: ["Info"],
		categories: {
			Speed: 100 * i,
			Cost: 100 * i,
			Passengers: 100 * i,
			Films: 100 * i,
		},
	});
}

export default cards;
