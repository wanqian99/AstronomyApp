import { useEffect, useState } from "react";
import BodiesPosition from "./components/BodiesPosition";
import BodiesComponent from "./components/BodiesComponent";
import BodiesForm from "./components/BodiesForm";
import moment from "moment";
import BodiesQuery from "./components/BodiesQuery";

export interface BodyQuery {
	body: string;
	latitude: number;
	longitude: number;
	from_date: string;
	to_date: string;
	elevation: number;
	time: string;
}

function App() {
	const [bodyQuery, setBodyQuery] = useState<BodyQuery>({} as BodyQuery);

	useEffect(() => {
		// set default values
		setBodyQuery({
			...bodyQuery,
			body: "",
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
			<button onClick={() => setBodyQuery({ ...bodyQuery, body: "" })}>
				Default
			</button>
			<BodiesComponent
				onSelectBody={(body) => setBodyQuery({ ...bodyQuery, body })}
			/>
			<hr />
			<BodiesForm
				submitForm={(newQuery) =>
					setBodyQuery({
						...bodyQuery,
						latitude: newQuery.latitude,
						longitude: newQuery.longitude,
						from_date: newQuery.from_date,
						to_date: newQuery.to_date,
						elevation: newQuery.elevation,
						time: newQuery.time,
					})
				}
			/>
			<hr />
			<BodiesQuery bodyQuery={bodyQuery} />
			<hr />
			<BodiesPosition bodyQuery={bodyQuery} />
		</>
	);
}

export default App;
