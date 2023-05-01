import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ObserverParams } from "../App";
import moment from "moment";
import PlanetsSelector from "./PlanetsSelector";
import PlanetsForm from "./PlanetsForm";
import PlanetsPosition from "./PlanetsPosition";
import PlanetCard from "./PlanetCard";

import lightBackgroundImage from "../assets/planets/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner-copy.jpg";
import darkBackgroundImage from "../assets/planets/beautiful-shining-stars-night-sky.jpg";
import { ColorModeContext } from "../theme";

const Planets = () => {
	const { mode } = useContext(ColorModeContext);
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
			<div
				style={{
					backgroundImage:
						mode === "dark"
							? `url(${darkBackgroundImage})`
							: `url(${lightBackgroundImage})`,
					backgroundSize: "contain",
					backgroundRepeat: "repeat-y",
				}}
			>
				<Grid
					container
					rowSpacing={5}
					sx={{
						maxWidth: "96%",
						justifyContent: "center",
						margin: "0 auto",
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
							{/* <PlanetsQuery observerParams={observerParams} /> */}
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
							<PlanetsPosition observerParams={observerParams} />
						</Box>
					</Grid>
				</Grid>
			</div>
		</>
	);
};

export default Planets;
