import { useEffect, useState } from "react";
import BodiesPosition from "./components/BodiesPosition";
import BodiesComponent from "./components/BodiesComponent";
import BodiesForm from "./components/BodiesForm";
import moment from "moment";
import BodiesQuery from "./components/BodiesQuery";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Tab, Tabs } from "@mui/material";

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Planets from "./components/Planets";
import StarChart from "./components/StarChart";
import MoonPhase from "./components/MoonPhase";
import NavBar from "./components/NavBar";

export interface BodyQuery {
	body: string;
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

			{/* <button onClick={() => setBodyQuery({ ...bodyQuery, body: "" })}>
				Default
			</button> */}
			{/* <BodiesComponent
				onSelectBody={(body) => setBodyQuery({ ...bodyQuery, body })}
			/> */}
			{/* <hr /> */}
			{/* <BodiesForm
				submitForm={(newQuery) =>
					setBodyQuery({
						...bodyQuery,
						latitude: newQuery.latitude,
						longitude: newQuery.longitude,
						from_date: newQuery.from_date,
						to_date: newQuery.to_date,
						elevation: newQuery.elevation,
						time: newQuery.time,
					})
				}
			/> */}
			{/* <hr /> */}
			{/* <BodiesQuery bodyQuery={bodyQuery} /> */}
			{/* <hr /> */}
			{/* <BodiesPosition bodyQuery={bodyQuery} /> */}
		</>
	);
}

export default App;
