import { shuffleCards, splitCardsInHalf, getCardsForRounds } from "../helpers";

describe("GameState - helpers", () => {
	describe("shuffleCards", () => {
		it("should return an array of the same length given", () => {
			const testCards = [{}, {}, {}];
			const resultCards = shuffleCards(testCards);
			expect(resultCards.length).toEqual(3);
		});

		it("should have all the same items as the original array", () => {
			const a = { a: 123 };
			const b = { b: 456 };
			const testCards = [a, b];
			const resultCards = shuffleCards(testCards);
			expect(resultCards).toContain(a);
			expect(resultCards).toContain(b);
		});
	});

	describe("splitCardsInHalf", () => {
		it("should return an two arrays half the size with an even numbered input", () => {
			const testCards = [{}, {}, {}, {}];
			const resultCards = splitCardsInHalf(testCards);
			expect(resultCards[0].length).toEqual(2);
			expect(resultCards[1].length).toEqual(2);
		});
		it("should return a two arrays half the size minus one with an odd numbered input", () => {
			const testCards = [{}, {}, {}, {}, {}, {}, {}];
			const resultCards = splitCardsInHalf(testCards);
			expect(resultCards[0].length).toEqual(3);
			expect(resultCards[1].length).toEqual(3);
		});
		it("should distribute arrays as expected given input", () => {
			const a = { a: 123 };
			const b = { b: 456 };
			const c = { c: 321 };
			const d = { d: 654 };
			const testCards = [a, b, c, d];
			const resultCards = splitCardsInHalf(testCards);
			expect(resultCards[0]).toEqual([a, c]);
			expect(resultCards[1]).toEqual([b, d]);
		});
	});
	describe("getCardsForRounds", () => {
		it("should return a chunk of the array given as input two times the round size", () => {
			const testCards = [{}, {}, {}, {}, {}, {}, {}];
			const rounds = 2;
			const resultCards = getCardsForRounds(testCards, rounds);
			expect(resultCards.length).toEqual(4);
		});
	});
});
