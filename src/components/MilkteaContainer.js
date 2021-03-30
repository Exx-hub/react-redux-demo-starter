import React from "react";
import { connect } from "react-redux";
import { buyMilktea } from "../redux/milktea/milkteaAction";

function MilkteaContainer(props) {
	return (
		<div>
			<h1>Number of Milktea - {props.numOfMilktea} </h1>
			<h2>brewed by: {props.brewer}</h2>
			<button onClick={props.buyMilktea}>BUY MILKTEA</button>
		</div>
	);
}

const mapState = (state) => {
	return {
		numOfMilktea: state.milktea.numOfMilktea,
		brewer: state.milktea.brewer,
	};
};

const mapDispatch = (dispatch) => {
	return {
		buyMilktea: () => dispatch(buyMilktea()),
	};
};

export default connect(mapState, mapDispatch)(MilkteaContainer);
