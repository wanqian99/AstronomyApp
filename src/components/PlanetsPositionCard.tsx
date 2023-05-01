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

const PlanetsPositionCard = ({ observerParams }: Props) => {
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
							</Card>
						</Grid>
					))
				)}
			</Grid>
		</>
	);
};

export default PlanetsPositionCard;
