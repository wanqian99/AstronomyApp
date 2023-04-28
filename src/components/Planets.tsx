import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { ObserverParams } from "../App";
import moment from "moment";
import PlanetsSelector from "./PlanetsSelector";
import PlanetsForm from "./PlanetsForm";
import PlanetsQuery from "./PlanetsQuery";
import PlanetsPosition from "./PlanetsPosition";

const Planets = () => {
	const [observerParams, setObserverParams] = useState<ObserverParams>(
		{} as ObserverParams
	);

	useEffect(() => {
		// set default values
		setObserverParams({
			...observerParams,
			planet: "",
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
			<Box>
				<PlanetsSelector
					onSelectPlanet={(planet) =>
						setObserverParams({ ...observerParams, planet })
					}
				/>

				<PlanetsForm
					submitForm={(newQuery) =>
						setObserverParams({
							...observerParams,
							latitude: newQuery.latitude,
							longitude: newQuery.longitude,
							from_date: newQuery.from_date,
							to_date: newQuery.to_date,
							elevation: newQuery.elevation,
							time: newQuery.time,
						})
					}
				/>

				<PlanetsQuery observerParams={observerParams} />

				<PlanetsPosition observerParams={observerParams} />
			</Box>
		</>
	);
};

export default Planets;
