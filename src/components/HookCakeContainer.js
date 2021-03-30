import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

function HookCakeContainer() {
	const cakes = useSelector((state) => state.cake.numOfCakes);
	const creator = useSelector((state) => state.cake.owner);
	const cakeDispatch = useDispatch();

	return (
		<div>
			<h1>Hook Cakes - {cakes}</h1>
			<h2>hooks created by: {creator}</h2>
			<button onClick={() => cakeDispatch(buyCake())}>BUY HOOK CAKE</button>
		</div>
	);
}

export default HookCakeContainer;
