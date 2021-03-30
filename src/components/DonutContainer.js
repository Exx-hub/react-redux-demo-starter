import React from "react";
import { connect } from "react-redux";
import { buyDonut } from "../redux/donut/donutAction";

function DonutContainer(props) {
	// console.log(props);
	return (
		<div>
			<h1>Number of Donuts - {props.numOfDonuts} </h1>
			<h2>Baked by: {props.baker} </h2>
			<button onClick={props.buyDonut}>BUY DONUT</button>
		</div>
	);
}

const mapState = (state) => {
	return {
		numOfDonuts: state.donut.numOfDonuts,
		baker: state.donut.baker,
	};
};

const mapDispatch = (dispatch) => {
	return {
		buyDonut: () => dispatch(buyDonut()),
	};
};

export default connect(mapState, mapDispatch)(DonutContainer);
