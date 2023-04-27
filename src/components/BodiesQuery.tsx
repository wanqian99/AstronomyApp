import { BodyQuery } from "../App";

interface Props {
	bodyQuery: BodyQuery;
}

const BodiesQuery = ({ bodyQuery }: Props) => {
	return (
		<>
			<div>
				<b>Bodies: </b>
				{bodyQuery.body ? bodyQuery.body : "All"}
			</div>
			<div>
				<b>Latitude: </b> {bodyQuery.latitude}
			</div>
			<div>
				<b>Longitude: </b> {bodyQuery.longitude}
			</div>
			<div>
				<b>DateRange: </b> {bodyQuery.from_date} - {bodyQuery.to_date}
			</div>
			<div>
				<b>Elevation: </b> {bodyQuery.elevation}
			</div>
			<div>
				<b>Time: </b> {bodyQuery.time}
			</div>
		</>
	);
};

export default BodiesQuery;
