import React, { useContext, useEffect, useState } from "react";
import { MoonPhaseParams } from "../hooks/useMoonPhase";
import { Grid, Box } from "@mui/material";
import moment from "moment";
import { ColorModeContext } from "../theme";
import MoonPhaseCard from "./MoonPhaseCard";
import MoonPhaseForm from "./MoonPhaseForm";

import lightBackgroundImage from "../assets/planets/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner-copy.jpg";
import darkBackgroundImage from "../assets/planets/beautiful-shining-stars-night-sky.jpg";

const MoonPhase = () => {
	const { mode } = useContext(ColorModeContext);
	const [moonPhaseParams, setMoonPhaseParams] = useState<MoonPhaseParams>(
		{} as MoonPhaseParams
	);

	useEffect(() => {
		// set default values
		setMoonPhaseParams({
			...moonPhaseParams,
			format: "png",
			style: {
				moonStyle: "sketch",
				backgroundStyle: mode === "dark" ? "stars" : "solid",
				backgroundColor: mode === "dark" ? "#212121" : "#f5f5f5",
				headingColor: mode === "dark" ? "white" : "black",
				textColor: mode === "dark" ? "white" : "black",
			},
			observer: {
				latitude: 6.56774,
				longitude: 79.88956,
				date: moment().format("YYYY-MM-DD"),
			},
			view: {
				type: "portrait-simple",
				orientation: "south-up",
			},
		});
	}, []);

	return (
		<>
			<Grid
				container
				sx={{
					maxWidth: "96%",
					justifyContent: "space-around",
					margin: "0 auto",
					paddingY: "3%",
				}}
			>
				<Grid item xs={11} md={5}>
					<Box
						sx={{
							maxWidth: { md: "98%", xs: "100%" },
							// marginLeft: "0",
							// marginRight: "auto",
						}}
					>
						<MoonPhaseForm
							submitForm={(newQuery) =>
								setMoonPhaseParams({
									format: "png",
									style: {
										moonStyle: newQuery.style.moonStyle,
										backgroundStyle:
											newQuery.style.backgroundStyle,
										backgroundColor:
											mode === "dark"
												? "#212121"
												: "#f5f5f5",
										headingColor:
											mode === "dark" ? "white" : "black",
										textColor:
											mode === "dark" ? "white" : "black",
									},
									observer: {
										latitude: newQuery.observer.latitude,
										longitude: newQuery.observer.longitude,
										date: newQuery.observer.date,
									},
									view: {
										type: newQuery.view.type,
										orientation: "south-up",
									},

									// {
									//     "format": "png",
									//     "style": {
									//         "moonStyle": "sketch",
									//         "backgroundStyle": "stars",
									//         "backgroundColor": "red",
									//         "headingColor": "white",
									//         "textColor": "red"
									//     },
									//     "observer": {
									//         "latitude": 6.56774,
									//         "longitude": 79.88956,
									//         "date": "2020-11-01"
									//     },
									//     "view": {
									//         "type": "portrait-simple",
									//         "orientation": "south-up"
									//     }
									// }
								})
							}
						/>
					</Box>
				</Grid>

				<Grid item xs={11} md={5}>
					<Box
						justifyContent="center"
						sx={{
							maxWidth: { md: "98%", xs: "100%" },
							// marginLeft: "auto",
							// marginRight: "0",
						}}
					>
						<MoonPhaseCard moonPhaseParams={moonPhaseParams} />
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default MoonPhase;
