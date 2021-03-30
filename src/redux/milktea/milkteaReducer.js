import { BUY_MILKTEA } from "./milkteaType";

const initialState = {
	numOfMilktea: 100,
	brewer: "Marisse",
};

const milkteaReducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_MILKTEA:
			return {
				...state,
				numOfMilktea: state.numOfMilktea - 1,
			};
		default:
			return state;
	}
};

export default milkteaReducer;
