import { useEffect, useState } from "react";
import BodiesPosition from "./components/BodiesPosition";
import BodiesComponent from "./components/BodiesComponent";
import BodiesForm from "./components/BodiesForm";

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
	// const [bodies, setBodies] = useState<Bodies[]>([]);
	// const [bodiesPosition, setBodiesPosition] = useState<BodiesPosition[]>([]);

	useEffect(() => {
		// set default values
		setBodyQuery({
			...bodyQuery,
			body: "",
			latitude: 33.775867,
			longitude: -84.39733,
			from_date: "2023-04-09",
			to_date: "2023-04-09",
			elevation: 1,
			time: "12:00:00",
		});
	}, []);

	// useEffect(() => {
	// const params = `params: {
	//     latitude: "33.775867",
	//     longitude: "-84.39733",
	//     from_date: "2017-12-20",
	//     to_date: "2017-12-21",
	//     elevation: 1,
	//     time: "12:00:00",
	// }`;

	// apiClient
	// 	.get<FetchResponse<Bodies>>("/bodies", {
	// 		params: {
	// 			latitude: "33.775867",
	// 			longitude: "-84.39733",
	// 			from_date: "2017-12-20",
	// 			to_date: "2017-12-21",
	// 			elevation: 1,
	// 			time: "12:00:00",
	// 		},
	// 	})
	// 	.then((res) => {
	// 		console.log(res.data.data);
	// 		setBodies(res.data.data);
	// 		console.log("success");
	// 	})
	// 	.catch((err) => {
	// 		console.log("error");
	// 	});

	// apiClient
	// 	.get<FetchResponse<BodiesPosition>>("/bodies/positions", {
	// 		params: {
	// 			latitude: "33.775867",
	// 			longitude: "-84.39733",
	// 			from_date: "2017-12-20",
	// 			to_date: "2017-12-21",
	// 			elevation: 1,
	// 			time: "12:00:00",
	// 		},
	// 	})
	// 	.then((res) => {
	// 		console.log("success");
	// 		console.log(res.data.data);
	// 		setBodiesPosition(res.data.data);
	// 	})
	// 	.catch((err) => {
	// 		console.log("error");
	// 	});
	// }, []);

	return (
		<>
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
			<button onClick={() => setBodyQuery({ ...bodyQuery, body: "" })}>
				Default
			</button>
			<BodiesComponent
				onSelectBody={(body) => setBodyQuery({ ...bodyQuery, body })}
			/>
			<BodiesPosition bodyQuery={bodyQuery} />
		</>
	);
}

export default App;
