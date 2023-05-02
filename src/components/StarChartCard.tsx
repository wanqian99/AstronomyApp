import React from "react";
import useStarChart, { StarChartParams } from "../hooks/useStarChart";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { constellations } from "./StarChartFormSelector_Constellation";
import moment from "moment";

interface Props {
	starChartParams: StarChartParams;
}

const StarChartCard = ({ starChartParams }: Props) => {
	const { data, error, isLoading, params } = useStarChart(starChartParams);

	// var constellationKey: string;
	var constellationValue;
	// var constellationDate;

	// // if starChartParams is not empty
	// if (Object.keys(starChartParams).length !== 0) {
	// 	constellationKey = starChartParams.view.parameters.constellation;
	// 	constellationDate = starChartParams.observer.date;

	// 	Object.entries(constellations).map(([key, value]) => {
	// 		if (key === constellationKey) {
	// 			constellationValue = value;
	// 		}
	// 	});
	// }

	// if (starChartParams.view !== undefined) {
	// 	constellationKey = starChartParams.view.parameters.constellation;
	// 	constellationDate = starChartParams.observer.date;

	Object.entries(constellations).map(([key, value]) => {
		if (key === params?.constellationKey) {
			constellationValue = value;
		}
	});
	// }
	console.log(params?.date);
	console.log(params?.constellationKey);

	if (error) return <p>{error}</p>;
	if (isLoading) return <p>Loading Star Chart...</p>;

	return (
		<>
			{starChartParams.view !== undefined && (
				<Card
					raised={true}
					sx={{
						backgroundColor: "background.default",
					}}
				>
					<CardContent>
						<Stack direction="row" justifyContent="space-between">
							<Typography
								// sx={{ fontSize: 16 }}
								gutterBottom
								color="divider"
								variant="subtitle1"
								sx={{ ml: 1, mt: 1, mb: 3 }}
							>
								{/* Star Chart: {constellationValue} [
								{constellationKey}] */}
								Star Chart:{" "}
								{/* {starChartParams.view !== undefined
									? Object.entries(constellations).map(
											([key, value]) =>
												key ===
												starChartParams.view.parameters
													.constellation
									  )
									: "null"}
								[
								{starChartParams.view !== undefined
									? starChartParams.view.parameters
											.constellation
									: "null"}
								] */}
								{/* {constellationKey !== undefined
									? constellationKey
									: "null"} */}
								{constellationValue}[{params?.constellationKey}]
							</Typography>

							<Typography
								// sx={{ fontSize: 16 }}
								gutterBottom
								color="divider"
								variant="subtitle1"
								sx={{ ml: 1, mt: 1, mb: 3 }}
							>
								{/* {moment(constellationDate).format(
									"Do MMM YYYY"
								)} */}
								{params?.date}
							</Typography>
						</Stack>
						<CardMedia
							component="img"
							alt="star chart"
							image={data?.imageUrl}
						/>
					</CardContent>
				</Card>
			)}
		</>
	);
};

export default StarChartCard;
