import request from "graphql-request";

const BASE_URL =
	"https://api-euwest.graphcms.com/v1/ck5wca13qc9ux01fgaidt12m4/master";

class StarWarsDataService {
	getStarShips() {
		const query = `{
			starships {
				name,
				class,
				maxAtmospheringSpeed,
				costInCredits,
				passengers,
				films {
					title
				}
			}
		}`;

		return request(BASE_URL, query).then((response) =>
			response.starships.map(
				({
					name,
					class: starshipClass,
					maxAtmospheringSpeed,
					costInCredits,
					passengers,
					films,
				}) => ({
					title: name,
					info: [starshipClass],
					categories: {
						Speed: maxAtmospheringSpeed || 0,
						Cost: costInCredits || 0,
						Passengers: passengers || 0,
						Films: films.length,
					},
				})
			)
		);
	}
}

export default new StarWarsDataService();
