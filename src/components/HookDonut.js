import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyDonut } from "../redux/donut/donutAction";

function HookDonut() {
	const donuts = useSelector((state) => state.donut.numOfDonuts);
	const baker = useSelector((state) => state.donut.baker);
	const donutDispatch = useDispatch();
	return (
		<div>
			<h1>Number of Donuts - {donuts} </h1>
			<h2>Baked by: {baker} </h2>
			<button onClick={() => donutDispatch(buyDonut())}>BUY DONUT</button>
		</div>
	);
}

export default HookDonut;
