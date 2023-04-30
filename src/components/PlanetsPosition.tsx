import Box from "@mui/material/Box";
import { ObserverParams } from "../App";
import usePlanetsPosition from "../hooks/usePlanetsPosition";
import {
	Card,
	CardContent,
	CardMedia,
	Grid,
	ImageListItem,
	Stack,
	Typography,
} from "@mui/material";
import moment from "moment";

interface Props {
	observerParams: ObserverParams;
}

const PlanetsPosition = ({ observerParams }: Props) => {
	const { data, error, isLoading } = usePlanetsPosition(observerParams);

	if (error) return <p>{error}</p>;
	if (isLoading) return <p>Loading Planets Details...</p>;

	return (
		<>
			<Grid
				container
				rowSpacing={3}
				sx={{
					justifyContent: "flex-start",
					margin: "0 auto",
				}}
			>
				{data?.table.rows.map((row) =>
					row.cells.map((cell) => (
						<Grid
							item
							xs={12}
							sm={6}
							md={4}
							key={cell.id + cell.date}
							sx={{ position: "relative" }}
						>
							<Card
								raised={true}
								sx={{
									backgroundColor: "background.default",
									maxWidth: "90%",
									minHeight: "700px",
									margin: "0 auto",
								}}
							>
								{/* <CardMedia
									sx={{
										width: "300px",
										height: "300px",
										backgroundSize: "contain",
									}}
									image="../src/assets/planets/sun.png"
									// title="green iguana"
								/> */}

								{/* <Box
									component="img"
									sx={{
										height: 233,
										width: 350,
										maxHeight: { xs: 233, md: 167 },
										maxWidth: { xs: 350, md: 250 },
									}}
									alt="The house from the offer."
									src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
								/> */}
								{/* <Box
									component="img"
									sx={{
										width: "100%",
										height: "100%",
										backgroundImage: `url(../src/assets/planets/sun.png)`,
										backgroundSize: "cover",
										// backgroundRepeat: "no-repeat",
									}}
									// alt="Sun planet image"
									alt={cell.name}
									// src="../src/assets/planets/${cell.id}.png"
								></Box> */}

								<CardContent>
									<Stack
										direction={"row"}
										// justifyContent={"space-between"}
										justifyContent={"flex-end"}
										alignItems={"center"}
									>
										{/* Planet Name */}
										{/* <Typography
											gutterBottom
											color="divider"
											variant="h6"
											className="underlay"
										>
											{cell.name}
										</Typography> */}
										{/* Query Date */}
										<Typography
											gutterBottom
											color="text.primary"
											variant="subtitle1"
										>
											{moment(cell.date).format(
												"Do MMM YYYY"
											)}
										</Typography>
									</Stack>
									{/* <Typography
										gutterBottom
										color="divider"
										variant="h6"
										className="overlay"
									>
										OVERLAY
									</Typography> */}

									{/* <Typography
										gutterBottom
										color="divider"
										variant="h3"
										className="underlay"
									>
										The
									</Typography>

									<ImageListItem
										sx={{
											width: "100%",
											height: "auto",
											margin: "0 auto",
										}}
									>
										<img
											src={`../src/assets/planets/${cell.id}.png`}
											alt={`${cell.name} planet image`}
											loading="lazy"
										/>
									</ImageListItem>

									<Typography
										gutterBottom
										// color="divider"
										variant="h3"
										className="overlay"
									>
										{cell.name}
									</Typography> */}
								</CardContent>

								<div key={cell.id + cell.date}>
									{/* <div>
										<b>Date: </b>{" "}
										{moment(cell.date).format(
											"Do MMM YYYY"
										)}
									</div> */}
									{/* <div>
										<b>id:</b> {cell.id} <b>name:</b>{" "}
										{cell.name}
									</div> */}
									<div>
										<b>Distance from earth(au): </b>
										{cell.distance.fromEarth.au}
									</div>
									<div>
										<b>Distance from earth(km): </b>
										{cell.distance.fromEarth.km}
									</div>
									<div>
										<b>
											Horizontal altitude (altitude) ||{" "}
										</b>
										Degrees:{" "}
										{
											cell.position.horizontal.altitude
												.degrees
										}{" "}
										String:{" "}
										{
											cell.position.horizontal.altitude
												.string
										}
									</div>
									<div>
										<b>Horizontal altitude (azimuth) || </b>
										Degrees:{" "}
										{
											cell.position.horizontal.azimuth
												.degrees
										}{" "}
										String:{" "}
										{
											cell.position.horizontal.azimuth
												.string
										}
									</div>
									<div>
										<b>Equatorial RightAscension || </b>
										Hours:{" "}
										{
											cell.position.equatorial
												.rightAscension.hours
										}{" "}
										String:{" "}
										{
											cell.position.equatorial
												.rightAscension.string
										}
									</div>
									<div>
										<b>Equatorial Declination || </b>
										Degrees:{" "}
										{
											cell.position.equatorial.declination
												.degrees
										}{" "}
										String:{" "}
										{
											cell.position.equatorial.declination
												.string
										}
									</div>
									<div>
										<b>Constellation || </b> id:{" "}
										{cell.position.constellation.id} short:{" "}
										{cell.position.constellation.short}{" "}
										name: {cell.position.constellation.name}
									</div>
									<div>
										<b>Extra Info || </b>
										Elongation : {
											cell.extraInfo.elongation
										}{" "}
										Magnitude : {cell.extraInfo.magnitude}
									</div>
								</div>
							</Card>
						</Grid>
					))
				)}
			</Grid>

			<Box color={"text.secondary"}>
				{/* <p>Planets Position:</p> */}
				{data?.table.rows.map(
					(row) =>
						row.cells.map((cell) => (
							<div key={cell.id + cell.date}>
								{/* <p>
				            {row.entry.id}
				            {row.entry.name}
				        </p> */}
								<div>
									<b>Date: </b> {cell.date.toString()}
								</div>
								<div>
									<b>id:</b> {cell.id} <b>name:</b>{" "}
									{cell.name}
								</div>
								<div>
									<b>Distance from earth(au): </b>
									{cell.distance.fromEarth.au}
								</div>
								<div>
									<b>Distance from earth(km): </b>
									{cell.distance.fromEarth.km}
								</div>
								<div>
									<b>Horizontal altitude (altitude) || </b>
									Degrees:{" "}
									{
										cell.position.horizontal.altitude
											.degrees
									}{" "}
									String:{" "}
									{cell.position.horizontal.altitude.string}
								</div>
								<div>
									<b>Horizontal altitude (azimuth) || </b>
									Degrees:{" "}
									{
										cell.position.horizontal.azimuth.degrees
									}{" "}
									String:{" "}
									{cell.position.horizontal.azimuth.string}
								</div>
								<div>
									<b>Equatorial RightAscension || </b>
									Hours:{" "}
									{
										cell.position.equatorial.rightAscension
											.hours
									}{" "}
									String:{" "}
									{
										cell.position.equatorial.rightAscension
											.string
									}
								</div>
								<div>
									<b>Equatorial Declination || </b>
									Degrees:{" "}
									{
										cell.position.equatorial.declination
											.degrees
									}{" "}
									String:{" "}
									{
										cell.position.equatorial.declination
											.string
									}
								</div>
								<div>
									<b>Constellation || </b> id:{" "}
									{cell.position.constellation.id} short:{" "}
									{cell.position.constellation.short} name:{" "}
									{cell.position.constellation.name}
								</div>
								<div>
									<b>Extra Info || </b>
									Elongation : {
										cell.extraInfo.elongation
									}{" "}
									Magnitude : {cell.extraInfo.magnitude}
								</div>
								<br />
							</div>
						))
					// <div key={row.cells[0].id}>
					// 	{/* <p>
					//             {row.entry.id}
					//             {row.entry.name}
					//         </p> */}
					// 	<div>
					// 		<b>id:</b> {row.cells[0].id} <b>name:</b>{" "}
					// 		{row.cells[0].name}
					// 	</div>
					// 	<div>
					// 		<b>Distance from earth(au): </b>
					// 		{row.cells[0].distance.fromEarth.au}
					// 	</div>
					// 	<div>
					// 		<b>Distance from earth(km): </b>
					// 		{row.cells[0].distance.fromEarth.km}
					// 	</div>
					// 	<div>
					// 		<b>Horizontal altitude (altitude) || </b>
					// 		Degrees:{" "}
					// 		{row.cells[0].position.horizontal.altitude.degrees}{" "}
					// 		String:{" "}
					// 		{row.cells[0].position.horizontal.altitude.string}
					// 	</div>
					// 	<div>
					// 		<b>Horizontal altitude (azimuth) || </b>
					// 		Degrees:{" "}
					// 		{row.cells[0].position.horizontal.azimuth.degrees}{" "}
					// 		String:{" "}
					// 		{row.cells[0].position.horizontal.azimuth.string}
					// 	</div>
					// 	<div>
					// 		<b>Equatorial RightAscension || </b>
					// 		Hours:{" "}
					// 		{
					// 			row.cells[0].position.equatorial.rightAscension
					// 				.hours
					// 		}{" "}
					// 		String:{" "}
					// 		{row.cells[0].position.equatorial.rightAscension.string}
					// 	</div>
					// 	<div>
					// 		<b>Equatorial Declination || </b>
					// 		Degrees:{" "}
					// 		{
					// 			row.cells[0].position.equatorial.declination.degrees
					// 		}{" "}
					// 		String:{" "}
					// 		{row.cells[0].position.equatorial.declination.string}
					// 	</div>
					// 	<div>
					// 		<b>Constellation || </b> id:{" "}
					// 		{row.cells[0].position.constellation.id} short:{" "}
					// 		{row.cells[0].position.constellation.short} name:{" "}
					// 		{row.cells[0].position.constellation.name}
					// 	</div>
					// 	<div>
					// 		<b>Extra Info || </b>
					// 		Elongation : {row.cells[0].extraInfo.elongation}{" "}
					// 		Magnitude : {row.cells[0].extraInfo.magnitude}
					// 	</div>
					// 	<br />
					// </div>
				)}
			</Box>
		</>
	);
};

export default PlanetsPosition;
