const BASE_URL = "https://swapi.dev/api";

class StarWarsDataService {
	getPageData(pageUrl) {
		return fetch(pageUrl).then((response) => response.json());
	}

	async getAllPagesData(resource) {
		const startingPageUrl = `${BASE_URL}/${resource}`;
		let data = [];
		let result = await this.getPageData(startingPageUrl);
		data = [...data, ...result.results];
		while (result.next) {
			result = await this.getPageData(result.next);
			data = [...data, ...result.results];
		}
		return data;
	}

	getStarShips() {
		return this.getAllPagesData("starships").then(this.sanitizeStarshipsData);
	}

	sanitizeNumber = (rawData) => {
		if (isNaN(rawData)) {
			return 0;
		}
		return Number(rawData);
	}

	sanitizeStarshipsData = (rawStarshipsData) => {
		return rawStarshipsData.map((rawStarshipData) => ({
			title: rawStarshipData.name,
			info: [rawStarshipData.starship_class],
			categories: {
				"Max Speed": this.sanitizeNumber(rawStarshipData.max_atmosphering_speed),
				"Cost in Credits": this.sanitizeNumber(rawStarshipData.cost_in_credits),
				Passengers: this.sanitizeNumber(rawStarshipData.passengers),
				"Number of Films": this.sanitizeNumber(rawStarshipData.films.length),
			},
		}));
	}
}

export default new StarWarsDataService();
