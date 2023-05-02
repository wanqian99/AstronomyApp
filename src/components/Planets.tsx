import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ObserverParams } from "../App";
import moment from "moment";
import PlanetsSelector from "./PlanetsSelector";
import PlanetsForm from "./PlanetsForm";
import PlanetsPositionCard from "./PlanetsPositionCard";
import PlanetCard from "./PlanetCard";

import { ColorModeContext } from "../theme";

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
				sx={{
					maxWidth: "96%",
					justifyContent: "center",
					margin: "0 auto",
					paddingY: "3%",
				}}
			>
				<Grid item xs={11} md={4}>
					<Box
						sx={{
							maxWidth: { md: "98%", xs: "100%" },
							marginLeft: "0",
							marginRight: "auto",
						}}
					>
						{/* Planets Card */}
						<PlanetCard observerParams={observerParams} />
						{/* Planets Query Form */}
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
					</Box>
				</Grid>
				<Grid item xs={11} md={8}>
					<Box
						sx={{
							maxWidth: { md: "98%", xs: "100%" },
							marginLeft: "auto",
							marginRight: "0",
						}}
					>
						{/* Planets Position Title and Selector Row */}
						<Stack
							direction="row"
							justifyContent="space-between"
							alignItems={"flex-end"}
						>
							<Typography variant="h5" color={"divider"}>
								Planets Position:{" "}
							</Typography>
							{/* Planets Selector */}
							<PlanetsSelector
								onSelectPlanet={(planet) =>
									setObserverParams({
										...observerParams,
										planet,
									})
								}
							/>
						</Stack>
						{/* Divider */}
						<Divider sx={{ margin: "10px auto" }} />
						{/* Planets Position Cards */}
						<PlanetsPositionCard observerParams={observerParams} />
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default Planets;
