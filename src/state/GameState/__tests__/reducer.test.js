import reducer from "../reducer";
import actions from "../actions";

jest.mock("../../../environment/config.js", () => ({
	numberOfRounds: 2,
}));

describe("GameState - reducer", () => {
	describe("SET_CARDS", () => {
		it("should set root properties correctly", () => {
			const inputState = {};
			const inputCards = [{ a: 123 }, { b: 312 }, { c: 431 }, { d: 563 }];
			const inputAction = { type: actions.SET_CARDS, value: inputCards };
			const resultState = reducer(inputState, inputAction);
			expect(resultState.totalRounds).toEqual(2); // mocked value
			expect(resultState.loading).toEqual(false);
			expect(resultState.gameOver).toEqual(false);
			expect(resultState.currentRound).toEqual(1);
			expect(resultState.allCards).toEqual(inputCards);
		});
		it("should set user object correctly", () => {
			const inputState = {};
			const inputCards = [{ a: 534 }, { b: 345 }, { c: 444 }, { d: 555 }];
			const inputAction = { type: actions.SET_CARDS, value: inputCards };
			const resultState = reducer(inputState, inputAction);
			const resultUser = resultState.user;
			expect(resultUser.readonly).toEqual(false);
			expect(resultUser.showCard).toEqual(true);
			expect(typeof resultUser.currentCard).toEqual("object");
			expect(resultUser.cards.length).toEqual(2);
			expect(resultUser.score).toEqual(2);
			expect(resultUser.state).toEqual(undefined);
		});
		it("should set computer object correctly", () => {
			const inputState = {};
			const inputCards = [{ a: 534 }, { b: 345 }, { c: 444 }, { d: 555 }];
			const inputAction = { type: actions.SET_CARDS, value: inputCards };
			const resultState = reducer(inputState, inputAction);
			const resultComputer = resultState.computer;
			expect(resultComputer.readonly).toEqual(true);
			expect(resultComputer.showCard).toEqual(false);
			expect(typeof resultComputer.currentCard).toEqual("object");
			expect(resultComputer.cards.length).toEqual(2);
			expect(resultComputer.score).toEqual(2);
			expect(resultComputer.state).toEqual(undefined);
		});
	});
	describe("HANDLE_CATEGORY_CLICK", () => {
		it("should remove user and computer current card", () => {
			const selectedCategory = "selectedCategory";
			const userCurrentCard = {
				id: 123,
				categories: {
					selectedCategory: 500,
				},
			};
			const user = {
				currentCard: userCurrentCard,
				cards: [userCurrentCard, { id: 999 }],
			};
			const computerCurrentCard = {
				id: 124,
				categories: {
					selectedCategory: 600,
				},
			};
			const computer = {
				currentCard: computerCurrentCard,
				cards: [computerCurrentCard, { id: 321 }],
			};
			const inputState = {
				user,
				computer,
			};
			const inputAction = {
				type: actions.HANDLE_CATEGORY_CLICK,
				value: selectedCategory,
			};
			const resultState = reducer(inputState, inputAction);
			expect(resultState.computer.cards.length).toEqual(1);
			expect(
				resultState.computer.cards.includes(computerCurrentCard)
			).toBeFalsy();
			expect(resultState.user.cards.length).toEqual(1);
			expect(resultState.user.cards.includes(userCurrentCard)).toBeFalsy();
		});
		it("should set user state to 'lose' and computer state to 'win' when computer category is higher score and adjust scores accordingly", () => {
			const selectedCategory = "selectedCategory";
			const userCurrentCard = {
				id: 343,
				categories: {
					selectedCategory: 500,
				},
			};
			const user = {
				score: 2,
				currentCard: userCurrentCard,
				cards: [userCurrentCard, { id: 333 }],
			};
			const computerCurrentCard = {
				id: 1234,
				categories: {
					selectedCategory: 62322200,
				},
			};
			const computer = {
				score: 2,
				currentCard: computerCurrentCard,
				cards: [computerCurrentCard, { id: 444 }],
			};
			const inputState = {
				user,
				computer,
			};
			const inputAction = {
				type: actions.HANDLE_CATEGORY_CLICK,
				value: selectedCategory,
			};
			const resultState = reducer(inputState, inputAction);
			expect(resultState.user.state).toEqual("lose");
			expect(resultState.user.score).toEqual(1);
			expect(resultState.computer.state).toEqual("win");
			expect(resultState.computer.score).toEqual(3);
		});
		it("should set user state to 'win' and computer state to 'lose' when user category is higher score and adjust scores accordingly", () => {
			const selectedCategory = "selectedCategory";
			const userCurrentCard = {
				id: 343,
				categories: {
					selectedCategory: 872394792347897,
				},
			};
			const user = {
				score: 2,
				currentCard: userCurrentCard,
				cards: [userCurrentCard, { id: 333 }],
			};
			const computerCurrentCard = {
				id: 1234,
				categories: {
					selectedCategory: 1,
				},
			};
			const computer = {
				score: 2,
				currentCard: computerCurrentCard,
				cards: [computerCurrentCard, { id: 444 }],
			};
			const inputState = {
				user,
				computer,
			};
			const inputAction = {
				type: actions.HANDLE_CATEGORY_CLICK,
				value: selectedCategory,
			};
			const resultState = reducer(inputState, inputAction);
			expect(resultState.user.state).toEqual("win");
			expect(resultState.user.score).toEqual(3);
			expect(resultState.computer.state).toEqual("lose");
			expect(resultState.computer.score).toEqual(1);
		});
		it("should set both computer and user state to 'draw' when category scores are the same, overall scores should not change", () => {
			const selectedCategory = "selectedCategory";
			const userCurrentCard = {
				id: 343,
				categories: {
					selectedCategory: 100,
				},
			};
			const user = {
				score: 2,
				currentCard: userCurrentCard,
				cards: [userCurrentCard, { id: 333 }],
			};
			const computerCurrentCard = {
				id: 1234,
				categories: {
					selectedCategory: 100,
				},
			};
			const computer = {
				score: 2,
				currentCard: computerCurrentCard,
				cards: [computerCurrentCard, { id: 444 }],
			};
			const inputState = {
				user,
				computer,
			};
			const inputAction = {
				type: actions.HANDLE_CATEGORY_CLICK,
				value: selectedCategory,
			};
			const resultState = reducer(inputState, inputAction);
			expect(resultState.user.state).toEqual("draw");
			expect(resultState.user.score).toEqual(2);
			expect(resultState.computer.state).toEqual("draw");
			expect(resultState.computer.score).toEqual(2);
		});
	});
	describe("START_NEW_ROUND", () => {
		it("should set gameOver to true if the next round is greater than the number of round", () => {
			const inputState = {
				currentRound: 2,
				totalRounds: 2,
			};
			const inputAction = { type: actions.START_NEW_ROUND };
			const resultState = reducer(inputState, inputAction);
			expect(resultState.gameOver).toBeTruthy();
		});
		it("should set the currentCard for the user and computer to the first item in their respective cards array", () => {
			const firstUserCard = { id: 123 };
			const firstComputerCard = { id: 430 };
			const inputState = {
				currentRound: 1,
				totalRounds: 2,
				user: {
					cards: [firstUserCard, { id: 43243 }],
				},
				computer: {
					cards: [firstComputerCard, { id: 43243 }],
				},
			};
			const inputAction = { type: actions.START_NEW_ROUND };
			const resultState = reducer(inputState, inputAction);
			expect(resultState.computer.currentCard).toEqual(firstComputerCard);
			expect(resultState.user.currentCard).toEqual(firstUserCard);
		});
		it("should set user and computer properties correctly", () => {
			const firstUserCard = { id: 123 };
			const firstComputerCard = { id: 430 };
			const inputState = {
				currentRound: 1,
				totalRounds: 2,
				user: {
					cards: [firstUserCard, { id: 43243 }],
				},
				computer: {
					cards: [firstComputerCard, { id: 43243 }],
				},
			};
			const inputAction = { type: actions.START_NEW_ROUND };
			const resultState = reducer(inputState, inputAction);
			expect(resultState.computer.showCard).toEqual(false);
			expect(resultState.computer.readonly).toEqual(true);
			expect(resultState.user.showCard).toEqual(true);
			expect(resultState.user.readonly).toEqual(false);
		});
	});
	describe("HIDE_CARDS", () => {
		it("should set showCard to false and state to undefined for user and computer", () => {
			const inputState = {
				currentRound: 1,
				totalRounds: 2,
				user: {
					cards: [{ id: 432 }, { id: 43243 }],
				},
				computer: {
					cards: [{ id: 222 }, { id: 43243 }],
				},
			};
			const inputAction = { type: actions.HIDE_CARDS };
			const resultState = reducer(inputState, inputAction);
			expect(resultState.user.showCard).toEqual(false);
			expect(resultState.user.state).toBeFalsy();
			expect(resultState.computer.showCard).toEqual(false);
			expect(resultState.computer.state).toBeFalsy();
		});
	});
});
