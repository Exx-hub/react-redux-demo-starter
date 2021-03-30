import "./App.css";
import CakeContainer from "./components/CakeContainer";

import { Provider } from "react-redux";
import store from "./redux/store";
import HookCakeContainer from "./components/HookCakeContainer";
import IcecreamContainer from "./components/IcecreamContainer";
import HookIcecreamContainer from "./components/HookIcecreamContainer";
import MilkteaContainer from "./components/MilkteaContainer";
import HookMilktea from "./components/HookMilktea";
import DonutContainer from "./components/DonutContainer";
import HookDonut from "./components/HookDonut";
import NewCakeContainer from "./components/NewCakeContainer";
import NewHookCake from "./components/NewHookCake";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				{/* <ItemContainer cake /> */}
				{/* <ItemContainer /> */}
				{/* <CakeContainer alvin="ALVIN" /> */}
				{/* <HookCakeContainer /> */}
				{/* <IcecreamContainer /> */}
				{/* <HookIcecreamContainer />
				<MilkteaContainer />
				<HookMilktea />
				<DonutContainer />
				<HookDonut /> */}
				{/* <NewCakeContainer /> */}
				{/* <NewHookCake /> */}
				<UserContainer />
			</div>
		</Provider>
	);
}

export default App;
