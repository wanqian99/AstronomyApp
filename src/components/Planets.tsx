import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import BodiesComponent from "./BodiesComponent";
import { BodyQuery } from "../App";
import moment from "moment";
import BodiesForm from "./BodiesForm";
import BodiesQuery from "./BodiesQuery";
import BodiesPosition from "./BodiesPosition";

const Planets = () => {
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
			<Box>
				<BodiesComponent
					onSelectBody={(body) =>
						setBodyQuery({ ...bodyQuery, body })
					}
				/>

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

				<BodiesQuery bodyQuery={bodyQuery} />

				<BodiesPosition bodyQuery={bodyQuery} />
			</Box>
		</>
	);
};

export default Planets;
