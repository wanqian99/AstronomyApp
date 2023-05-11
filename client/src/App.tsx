import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Planets from "./components/Planets";
import StarChart from "./components/StarChart";
import MoonPhase from "./components/MoonPhase";
import NavBar from "./components/NavBar";

import lightBackgroundImage from "./assets/planets/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner-copy.jpg";
import darkBackgroundImage from "./assets/planets/beautiful-shining-stars-night-sky.jpg";
import { useContext, useEffect, useState } from "react";
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

	const [backendData, setBackendData] = useState<any>();

	useEffect(() => {
		// fetch("/api")
		// 	.then((res) => res.json())
		// 	.then((data) => setBackendData(data));
		// fetch("/api/apod")
		// 	.then((res) => res.json())
		// 	.then((data) => console.log(data));
	}, []);

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
				{/* {backendData === undefined ? (
					<p>Loading...</p>
				) : (
					backendData.users.map((user: any, index: number) => (
						<p key={index}>{user}</p>
					))
				)} */}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="planets" element={<Planets />} />
					<Route path="starChart" element={<StarChart />} />
					<Route path="moonPhase" element={<MoonPhase />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
