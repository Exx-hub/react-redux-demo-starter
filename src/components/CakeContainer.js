import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

function CakeContainer(props) {
	// console.log(props);
	return (
		<div>
			{/* <h5>POS by: {props.alvin}</h5> */}
			<h1>Number of Cakes - {props.numOfCakes}</h1>
			<h2>created by: {props.creator}</h2>
			<button onClick={props.buyCake}>BUY CAKE</button>
		</div>
	);
}

// ------ for single reducer
// const mapState = (state) => {
// 	return {
// 		numOfCakes: state.numOfCakes,
// 		shopOwner: state.shopOwner,
// 	};
// };

// -- for multi reducer using combinereducer and rootreducer
// now have to specify state property
const mapState = (state) => {
	return {
		numOfCakes: state.cake.numOfCakes,
		creator: state.cake.owner,
	};
};

const mapDispatch = (dispatch) => {
	return {
		buyCake: () => dispatch(buyCake()),
	};
};

export default connect(mapState, mapDispatch)(CakeContainer);
