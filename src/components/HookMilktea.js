import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyMilktea } from "../redux/milktea/milkteaAction";

function HookMilktea() {
	const milktea = useSelector((state) => state.milktea.numOfMilktea);
	const brewer = useSelector((state) => state.milktea.brewer);
	const milkteaDispatch = useDispatch();
	return (
		<div>
			<h1>Number of Milktea - {milktea} </h1>
			<h2>brewed by: {brewer}</h2>
			<button onClick={() => milkteaDispatch(buyMilktea())}>BUY MILKTEA</button>
		</div>
	);
}

export default HookMilktea;
