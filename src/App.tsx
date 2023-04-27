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
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Planets from "./components/Planets";
import StarChart from "./components/StarChart";
import MoonPhase from "./components/MoonPhase";

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
	const [bodyQuery, setBodyQuery] = useState<BodyQuery>({} as BodyQuery);

	useEffect(() => {
		// set default values
		setBodyQuery({
			...bodyQuery,
			body: "",
			latitude: 33.775867,
			longitude: -84.39733,
			from_date: moment().format("YYYY-MM-DD"),
			to_date: moment().format("YYYY-MM-DD"),
			elevation: 1,
			time: moment().format("HH:mm:ss"),
		});
	}, []);

	// const [value, setValue] = useState("one");

	// const handleChange = (event: React.SyntheticEvent, newValue: string) => {
	// 	setValue(newValue);
	// };

	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="Planets" element={<Planets />} />
				<Route path="Star Chart" element={<StarChart />} />
				<Route path="Moon Phase" element={<MoonPhase />} />
			</Routes>
			{/* <CssBaseline />
			<Container maxWidth="sm">
				<Box sx={{ bgcolor: "#cfe8fc", width: "100%" }}>
					<Tabs
						value={value}
						onChange={handleChange}
						textColor="secondary"
						indicatorColor="secondary"
						aria-label="secondary tabs example"
					>
						<Tab value="one" label="Item One" />
						<Tab value="two" label="Item Two" />
						<Tab value="three" label="Item Three" />
					</Tabs>
				</Box>
                <Box>

                </Box>
			</Container> */}
			{/* <Container maxWidth="sm">
				<Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}> */}
			{/* <Tabs
			// value={value}
			// onChange={handleChange}
			// textColor="secondary"
			// indicatorColor="secondary"
			// aria-label="secondary tabs example"
			>
				<Tab value="one" label="Item One" />
				<Tab value="two" label="Item Two" />
				<Tab value="three" label="Item Three" />
			</Tabs> */}
			{/* </Box>
			</Container> */}

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
