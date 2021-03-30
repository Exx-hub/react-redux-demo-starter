import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import donutReducer from "./donut/donutReducer";
import icecreamReducer from "./iceCream/icecreamReducer";
import milkteaReducer from "./milktea/milkteaReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
	// cake: cakeReducer,
	// icecream: icecreamReducer,
	// milktea: milkteaReducer,
	// donut: donutReducer,
	users: userReducer,
});

export default rootReducer;

// combine all reducers to be used into an object root reducer.
// then import this rootreducer to the store and pass it as an argument
// to the createstore function instead of a single reducer.
