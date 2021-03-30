import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
import { buyIcecream } from "../redux/iceCream/icecreamAction";

function ItemContainer(props) {
	console.log(props);
	return (
		<div>
			<h1>Item - {props.item}</h1>
			<button onClick={props.buyItem}>BUY ITEM</button>
		</div>
	);
}

const mapState = (state, ownProps) => {
	const item = ownProps.cake
		? state.cake.numOfCakes
		: state.icecream.numOfIcecream;

	return {
		item: item,
	};
};

const mapDispatch = (dispatch, ownProps) => {
	const dispatchFunction = ownProps.cake
		? () => dispatch(buyCake())
		: () => dispatch(buyIcecream());

	return {
		buyItem: dispatchFunction,
	};
};

export default connect(mapState, mapDispatch)(ItemContainer);
