import actions from "./actions";

export default function reducer(state, action) {
	switch (action.type) {
		case actions.SET_LOADING:
			return { ...state, count: action.value };
		default:
			return state;
	}
}
