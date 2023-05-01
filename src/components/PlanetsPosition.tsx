import Box from "@mui/material/Box";
import { ObserverParams } from "../App";
import usePlanetsPosition from "../hooks/usePlanetsPosition";
import {
	Card,
	CardContent,
	Divider,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import moment from "moment";
import { useContext } from "react";
import { ColorModeContext } from "../theme";

interface Props {
	observerParams: ObserverParams;
}

const PlanetsPosition = ({ observerParams }: Props) => {
	const { data, error, isLoading } = usePlanetsPosition(observerParams);
	const { mode } = useContext(ColorModeContext);

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
									minHeight: "570px",
									margin: "0 auto",
								}}
							>
								<CardContent>
									{/* Planet Name */}
									<Typography
										color={
											mode == "light"
												? "goldenrod"
												: "khaki"
										}
										variant="h3"
										textAlign="center"
										fontFamily="cursive"
									>
										{cell.name}
									</Typography>

									{/* Query Date */}
									<Typography
										gutterBottom
										color="text.primary"
										variant="h6"
										textAlign="center"
										marginBottom="15%"
									>
										{moment(cell.date).format(
											"Do MMM YYYY"
										)}
									</Typography>

									{/* DISTANCE */}
									<Stack
										direction={"row"}
										justifyContent={"space-between"}
										alignItems={"center"}
									>
										{/* Distance Title */}
										<Typography
											color="divider"
											variant="h5"
											// fontFamily="cursive"
											// fontFamily="fantasy"
											// fontFamily="Roboto"
											// fontFamily="sans-serif"
											// fontFamily="serif"
											// fontStyle="italic"
											fontWeight={600}
											textTransform="uppercase"
										>
											Distance
										</Typography>

										<Typography
											color="divider"
											variant="subtitle2"
											letterSpacing={-1}
											textTransform="uppercase"
										>
											From Earth
										</Typography>
									</Stack>
									<Divider />
									<Typography
										color="text.primary"
										variant="subtitle1"
										fontStyle="italic"
									>
										{cell.distance.fromEarth.km} KM
									</Typography>

									{/* HORIZONAL */}
									{/* Horizonal Title */}
									<Typography
										color="divider"
										variant="subtitle1"
										textTransform="uppercase"
										textAlign="left"
										fontWeight={600}
										marginTop={"8%"}
									>
										Horizonal
									</Typography>
									<Divider />
									{/* HORIZONAL - Altitude, Azimuth */}
									<Stack
										direction={"row"}
										justifyContent={"space-between"}
										alignItems={"center"}
									>
										<Stack direction={"column"}>
											{/* Altitude Title */}
											<Typography
												color={
													mode == "light"
														? "goldenrod"
														: "khaki"
												}
												variant="h6"
												fontWeight={400}
												textTransform="uppercase"
											>
												Altitude
											</Typography>
											{/* Altitude Degree */}
											<Typography
												color="text.primary"
												variant="subtitle2"
												textAlign="left"
											>
												{
													cell.position.horizontal
														.altitude.degrees
												}
												&deg;
											</Typography>
										</Stack>
										<Stack direction={"column"}>
											{/* Azimuth Title */}
											<Typography
												color={
													mode == "light"
														? "goldenrod"
														: "khaki"
												}
												variant="h6"
												fontWeight={400}
												textTransform="uppercase"
											>
												Azimuth
											</Typography>
											{/* Azimuth Degree */}
											<Typography
												color="text.primary"
												variant="subtitle2"
												textAlign="right"
											>
												{
													cell.position.horizontal
														.azimuth.degrees
												}
												&deg;
											</Typography>
										</Stack>
									</Stack>

									{/* EQUATORIAL */}
									{/* Equatorial Title */}
									<Typography
										color="divider"
										variant="subtitle1"
										textTransform="uppercase"
										textAlign="left"
										fontWeight={600}
										marginTop={"8%"}
									>
										Equatorial
									</Typography>
									<Divider />
									{/* EQUATORIAL - RightAscension, Declination */}
									<Stack
										direction={"row"}
										justifyContent={"space-between"}
										alignItems={"flex-end"}
									>
										{/* Right Ascension Title */}
										<Typography
											color="text.primary"
											variant="subtitle2"
											fontWeight={600}
											textTransform="uppercase"
										>
											Right Ascension:
										</Typography>
										{/* Right Ascension Degree */}
										<Typography
											color="divider"
											variant="subtitle2"
										>
											{
												cell.position.equatorial
													.rightAscension.hours
											}{" "}
											Hours
										</Typography>
									</Stack>
									<Stack
										direction={"row"}
										justifyContent={"space-between"}
										alignItems={"flex-end"}
									>
										{/* Declination Title */}
										<Typography
											color="text.primary"
											variant="subtitle2"
											fontWeight={600}
											textTransform="uppercase"
										>
											Declination:
										</Typography>
										{/* Declination Degree */}
										<Typography
											color="divider"
											variant="subtitle2"
										>
											{
												cell.position.equatorial
													.declination.degrees
											}
											&deg;
										</Typography>
									</Stack>

									{/* CONSTELLATION */}
									{/* Constellation Name */}
									<Typography
										color={
											mode == "light"
												? "goldenrod"
												: "khaki"
										}
										variant="subtitle1"
										textAlign="center"
										marginTop={"8%"}
									>
										Constellation
									</Typography>
									{/* Constellation Name */}
									<Typography
										color="divider"
										variant="h5"
										letterSpacing={5}
										fontWeight={600}
										textTransform="uppercase"
										textAlign="center"
									>
										{cell.position.constellation.name}
									</Typography>

									{/* Elongation and Magnitude */}
									{cell.extraInfo.elongation !== null &&
									cell.extraInfo.magnitude !== null ? (
										<Stack
											direction={"row"}
											justifyContent={"space-between"}
											alignItems={"flex-end"}
											marginTop="8%"
										>
											{/* Elongation */}
											<Stack direction={"column"}>
												{/* Elongation Title */}
												<Typography
													color="text.primary"
													variant="subtitle2"
													fontWeight={400}
													textTransform="uppercase"
													textAlign="center"
												>
													Elongation
												</Typography>
												{/* Elongation */}
												<Typography
													color="divider"
													variant="subtitle1"
													textAlign="center"
												>
													{cell.extraInfo.elongation}
												</Typography>
											</Stack>
											{/* Magnitude */}
											<Stack direction={"column"}>
												{/* Magnitude Title */}
												<Typography
													color="text.primary"
													variant="subtitle2"
													fontWeight={400}
													textTransform="uppercase"
													textAlign="center"
												>
													Magnitude
												</Typography>
												{/* Magnitude */}
												<Typography
													color="divider"
													variant="subtitle1"
													textAlign="right"
												>
													{cell.extraInfo.magnitude}
												</Typography>
											</Stack>
										</Stack>
									) : null}
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
									{/* <div>
										<b>Distance from earth(au): </b>
										{cell.distance.fromEarth.au}
									</div> */}
									{/* <div>
										<b>Distance from earth(km): </b>
										{cell.distance.fromEarth.km}
									</div> */}
									{/* <div>
										<b>Horizonal altitude || </b>
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
									</div> */}
									{/* <div>
										<b>Horizonal azimuth || </b>
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
									</div> */}
									{/* <div>
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
									</div> */}
									{/* <div>
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
									</div> */}
									{/* <div>
										<b>Constellation || </b> id:{" "}
										{cell.position.constellation.id} short:{" "}
										{cell.position.constellation.short}{" "}
										name: {cell.position.constellation.name}
									</div> */}
									{/* <div>
										<b>Extra Info || </b>
										Elongation : {
											cell.extraInfo.elongation
										}{" "}
										Magnitude : {cell.extraInfo.magnitude}
									</div> */}
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
