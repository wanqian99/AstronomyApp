import { ObserverParams } from "../App";

interface Props {
	observerParams: ObserverParams;
}

const PlanetsQuery = ({ observerParams }: Props) => {
	return (
		<>
			<div style={{ textTransform: "capitalize" }}>
				<b>Planets: </b>
				{observerParams.planet ? observerParams.planet : "All"}
			</div>
			<div>
				<b>Latitude: </b> {observerParams.latitude}
			</div>
			<div>
				<b>Longitude: </b> {observerParams.longitude}
			</div>
			<div>
				<b>DateRange: </b> {observerParams.from_date} -{" "}
				{observerParams.to_date}
			</div>
			<div>
				<b>Elevation: </b> {observerParams.elevation}
			</div>
			<div>
				<b>Time: </b> {observerParams.time}
			</div>
		</>
	);
};

export default PlanetsQuery;
