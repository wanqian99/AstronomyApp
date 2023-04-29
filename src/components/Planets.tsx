import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ObserverParams } from "../App";
import moment from "moment";
import PlanetsSelector from "./PlanetsSelector";
import PlanetsForm from "./PlanetsForm";
import PlanetsQuery from "./PlanetsQuery";
import PlanetsPosition from "./PlanetsPosition";

const Planets = () => {
	const [observerParams, setObserverParams] = useState<ObserverParams>(
		{} as ObserverParams
	);

	useEffect(() => {
		// set default values
		setObserverParams({
			...observerParams,
			planet: "",
			latitude: 33.775867,
			longitude: -84.39733,
			from_date: moment().format("YYYY-MM-DD"),
			to_date: moment().format("YYYY-MM-DD"),
			elevation: 1,
			time: moment().format("HH:mm:ss"),
		});
	}, []);

	return (
		<>
			<Grid
				container
				// direction="row"
				rowSpacing={2}
				// columnSpacing={10}
				// justifyContent="center"
				// alignItems="flex-start"
				// direction="column"
				// alignItems="center"
				// justifyContent="center"
				sx={{
					maxWidth: "100%",
					margin: "5px auto",
					// backgroundColor: "background",
				}}
			>
				<Grid item xs={12} md={4}>
					<PlanetsForm
						submitForm={(newQuery) =>
							setObserverParams({
								...observerParams,
								latitude: newQuery.latitude,
								longitude: newQuery.longitude,
								from_date: newQuery.from_date,
								to_date: newQuery.to_date,
								elevation: newQuery.elevation,
								time: newQuery.time,
							})
						}
					/>
					{/* <PlanetsQuery observerParams={observerParams} /> */}
				</Grid>
				<Grid item xs={12} md={8}>
					<Stack
						direction={"row"}
						sx={{
							maxWidth: "90%",
							justifyContent: "space-between",
							alignItems: "flex-end",
							margin: "5px auto",
						}}
					>
						<Typography variant="h5" color={"#ba68c8"}>
							Planets Position:{" "}
						</Typography>
						{/* Planets Selector */}
						<PlanetsSelector
							onSelectPlanet={(planet) =>
								setObserverParams({ ...observerParams, planet })
							}
						/>
					</Stack>
					<Divider
						sx={{
							maxWidth: "90%",
							margin: "10px auto",
						}}
					/>
					{/* Planets Position Cards */}
					<PlanetsPosition observerParams={observerParams} />
				</Grid>
			</Grid>
		</>
	);
};

export default Planets;
