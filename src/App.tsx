import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Planets from "./components/Planets";
import StarChart from "./components/StarChart";
import MoonPhase from "./components/MoonPhase";
import NavBar from "./components/NavBar";

import lightBackgroundImage from "./assets/planets/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner-copy.jpg";
import darkBackgroundImage from "./assets/planets/beautiful-shining-stars-night-sky.jpg";
import { useContext } from "react";
import { ColorModeContext } from "./theme";

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
	const { mode } = useContext(ColorModeContext);

	return (
		<>
			<div
				style={{
					backgroundImage:
						mode === "dark"
							? `url(${darkBackgroundImage})`
							: `url(${lightBackgroundImage})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundAttachment: "fixed",
					minHeight: "100vh",
				}}
			>
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
			</div>
		</>
	);
}

export default App;
