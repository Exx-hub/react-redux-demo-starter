import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

function NewHookCake(props) {
	const [number, setNumber] = useState(1);
	const cakes = useSelector((state) => state.cake.numOfCakes);
	const baker = useSelector((state) => state.cake.owner);
	const dispatch = useDispatch();
	return (
		<div>
			<h1>NUMBER OF HOOK CAKES - {cakes} </h1>
			<h2>created by: {baker}</h2>
			<input
				type="number"
				value={number}
				onChange={(e) => setNumber(e.target.value)}
			/>
			<button onClick={() => dispatch(buyCake(number))}>BUY CAKE</button>
		</div>
	);
}

export default NewHookCake;
