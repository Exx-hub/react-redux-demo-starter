import { combineReducers, createStore, applyMiddleware } from "redux";
import cakeReducer from "./cake/cakeReducer";
import donutReducer from "./donut/donutReducer";
import icecreamReducer from "./iceCream/icecreamReducer";
import milkteaReducer from "./milktea/milkteaReducer";
import rootReducer from "./rootReducer";

import logger from "redux-logger";

// import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

// ---- this rootreducer can be put in a separate file and imported here
// const rootReducer = combineReducers({
// 	cake: cakeReducer,
// 	icecream: icecreamReducer,
// 	milktea: milkteaReducer,
// });

// const store = createStore(cakeReducer);
// const store = createStore(icecreamReducer);
// const store = createStore(milkteaReducer);
// const store = createStore(donutReducer);

// const store = createStore(rootReducer);
// pass rootreducer as an argument instead of a single reducer for multiple
// reducers

// ---- now using applymiddleware with logger
// const store = createStore(rootReducer, applyMiddleware(logger));

// ---- this time using redux devtools
// composewithdevtools imported above
// pass it as 2nd argument to create store and pass applymiddleware in it
// const store = createStore(
// 	rootReducer,
// 	composeWithDevTools(applyMiddleware(logger))
// );

// --- this one for redux thunk async actions
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
