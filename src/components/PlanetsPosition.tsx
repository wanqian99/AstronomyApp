import Box from "@mui/material/Box";
import { ObserverParams } from "../App";
import usePlanetsPosition from "../hooks/usePlanetsPosition";

interface Props {
	observerParams: ObserverParams;
}

const PlanetsPosition = ({ observerParams }: Props) => {
	const { data, error, isLoading } = usePlanetsPosition(observerParams);

	if (error) return <p>{error}</p>;
	if (isLoading) return <p>Loading Planets Details...</p>;

	return (
		<>
			<Box
				color={"text.secondary"}
				sx={
					{
						// maxWidth: "90%",
						// margin: "5px auto",
					}
				}
			>
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
