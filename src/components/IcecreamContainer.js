import React from "react";

import { connect } from "react-redux";
import { buyIcecream } from "../redux/iceCream/icecreamAction";

function IcecreamContainer(props) {
	// console.log(props);
	return (
		<div>
			<h1>Number of Icecream - {props.numOfIcecream}</h1>
			<h2>by: {props.shopOwner}</h2>
			<button onClick={props.buyIcecream}>BUY ICECREAM</button>
		</div>
	);
}
// ------ for single reducer
// const mapState = (state) => {
// 	return {
// 		numOfIcecream: state.numOfIcecream,
// 		shopOwner: state.shopOwner,
// 	};
// };

// -- for multi reducer using combinereducer and rootreducer
// now have to specify state property
const mapState = (state) => {
	return {
		numOfIcecream: state.icecream.numOfIcecream,
		shopOwner: state.icecream.shopOwner,
	};
};

const mapDispatch = (dispatch) => {
	return {
		buyIcecream: () => dispatch(buyIcecream()),
	};
};

export default connect(mapState, mapDispatch)(IcecreamContainer);
