import { Grid, Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import lightBackgroundImage from "../assets/planets/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner-copy.jpg";
import darkBackgroundImage from "../assets/planets/beautiful-shining-stars-night-sky.jpg";
import { ColorModeContext } from "../theme";
import StarChartForm from "./StarChartForm";
// import { StarChartParams } from "../App";
import moment from "moment";
import useStarChart, { StarChartParams } from "../hooks/useStarChart";
import axios, { CanceledError } from "axios";
import StarChartCard from "./StarChartCard";

const StarChart = () => {
	const { mode } = useContext(ColorModeContext);
	const [starChartParams, setStarChartParams] = useState<StarChartParams>(
		{} as StarChartParams
	);

	// const test = {
	// 	style: "inverted",
	// 	observer: {
	// 		latitude: 33.775867,
	// 		longitude: -84.39733,
	// 		date: "2019-12-20",
	// 	},
	// 	view: {
	// 		type: "constellation",
	// 		parameters: {
	// 			constellation: "ori", // 3 letter constellation id
	// 		},
	// 	},
	// };

	useEffect(() => {
		// set default values
		setStarChartParams({
			...starChartParams,
			style: "default",
			observer: {
				latitude: 33.775867,
				longitude: -84.39733,
				date: moment().format("YYYY-MM-DD"),
			},
			view: {
				type: "constellation",
				parameters: {
					constellation: "and",
				},
			},
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
						<StarChartForm
							submitForm={(newQuery) =>
								setStarChartParams({
									style: newQuery.style,
									observer: {
										latitude: newQuery.observer.latitude,
										longitude: newQuery.observer.longitude,
										date: newQuery.observer.date,
									},
									view: {
										// type: newQuery.view.type,
										type: "constellation",
										parameters: {
											constellation:
												newQuery.view.parameters
													.constellation,
										},
									},
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
						<StarChartCard starChartParams={starChartParams} />
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default StarChart;
