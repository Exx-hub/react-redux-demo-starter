import React, { useState } from "react";
import { connect } from "react-redux";

import { buyCake } from "../redux/cake/cakeActions";

function NewCakeContainer(props) {
	const [number, setNumber] = useState(1);

	return (
		<div>
			<h1>NUMBER OF CAKES - {props.numOfCakes} </h1>
			<h2>created by: {props.owner} </h2>
			<input
				type="number"
				value={number}
				onChange={(e) => setNumber(e.target.value)}
			/>
			<button onClick={() => props.buyCake(number)}>BUY {number} CAKE/S</button>
		</div>
	);
}

const mapState = (state) => {
	return {
		numOfCakes: state.cake.numOfCakes,
	};
};

const mapDispatch = (dispatch) => {
	return {
		buyCake: (number) => dispatch(buyCake(number)),
	};
};

export default connect(mapState, mapDispatch)(NewCakeContainer);
