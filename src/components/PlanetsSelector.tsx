import usePlanets from "../hooks/usePlanets";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import Box from "@mui/material/Box";

interface Props {
	onSelectPlanet: (planet: string) => void;
}

const PlanetsSelector = ({ onSelectPlanet }: Props) => {
	const { data, error, isLoading } = usePlanets();
	const [planet, setPlanet] = useState("All");

	if (error) return <p>{error}</p>;
	if (isLoading) return <p>Loading Planets...</p>;

	const handleChange = (event: SelectChangeEvent) => {
		// set planet to show selected planet on dropdown
		setPlanet(event.target.value);
		// parse selected planet to parent component to fetch data
		// parse empty string if selected is All
		if (event.target.value == "All") {
			onSelectPlanet("");
		} else {
			onSelectPlanet(event.target.value);
		}
	};

	return (
		<>
			{/* {data?.bodies.map((planet) => (
				<button onClick={() => onSelectPlanet(planet)} key={planet}>
					{planet}
				</button>
			))} */}

			<Box
				sx={
					{
						// maxWidth: "90%",
						// margin: "auto",
						// backgroundColor: "primary",
						// border: "1px solid white",
					}
				}
			>
				<FormControl sx={{ minWidth: 120 }} color="primary">
					<InputLabel id="planetFilter">Planet</InputLabel>
					<Select
						labelId="planetFilter"
						id="planetFilter_select"
						value={planet}
						label="Planet"
						onChange={handleChange}
						size="small"
						style={{ textTransform: "capitalize" }}
					>
						<MenuItem value="All">
							<em>All</em>
						</MenuItem>
						{data?.bodies.map((p) => (
							<MenuItem
								value={p}
								key={p}
								style={{ textTransform: "capitalize" }}
							>
								{p}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>
		</>
	);
};

export default PlanetsSelector;
