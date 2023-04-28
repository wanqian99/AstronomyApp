import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Planets from "./components/Planets";
import StarChart from "./components/StarChart";
import MoonPhase from "./components/MoonPhase";
import NavBar from "./components/NavBar";

export interface ObserverParams {
	planet: string;
	latitude: number;
	longitude: number;
	from_date: string;
	to_date: string;
	elevation: number;
	time: string;
}

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="Planets" element={<Planets />} />
				<Route path="Star Chart" element={<StarChart />} />
				<Route path="Moon Phase" element={<MoonPhase />} />
			</Routes>

			{/* <button onClick={() => setObserverParams({ ...ObserverParams, body: "" })}>
				Default
			</button> */}
		</>
	);
}

export default App;
