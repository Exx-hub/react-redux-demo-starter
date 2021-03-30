import React from "react";
import { useDispatch, useSelector } from "react-redux";

function HookIcecreamContainer() {
	const numOfIcecream = useSelector((state) => state.icecream.numOfIcecream);
	const shopOwner = useSelector((state) => state.icecream.shopOwner);
	const icecreamDispatch = useDispatch();
	return (
		<div>
			<h1>Hook Icecream - {numOfIcecream}</h1>
			<h2>hooks by: {shopOwner}</h2>
			<button onClick={() => icecreamDispatch({ type: "BUY_ICECREAM" })}>
				BUY HOOK ICE CREAM
			</button>
		</div>
	);
}

export default HookIcecreamContainer;
