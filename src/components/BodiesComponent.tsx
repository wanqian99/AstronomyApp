import useBodies from "../hooks/useBodies";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useContext, useState } from "react";

interface Props {
	onSelectBody: (body: string) => void;
}

const BodiesComponent = ({ onSelectBody }: Props) => {
	const { data, error, isLoading } = useBodies();
	const [planet, setPlanet] = useState("All");

	if (error) return <p>{error}</p>;
	if (isLoading) return <p>Loading Bodies...</p>;

	const handleChange = (event: SelectChangeEvent) => {
		// set planet to show selected planet on dropdown
		setPlanet(event.target.value);
		// parse selected body to parent component to fetch data
		// parse empty string if selected is All
		if (event.target.value == "All") {
			onSelectBody("");
		} else {
			onSelectBody(event.target.value);
		}
	};

	return (
		<>
			{/* {data?.bodies.map((body) => (
				<button onClick={() => onSelectBody(body)} key={body}>
					{body}
				</button>
			))} */}

			<FormControl sx={{ m: 1, minWidth: 120 }} color="primary">
				<InputLabel id="planetFilter">Planet</InputLabel>
				<Select
					labelId="planetFilter"
					id="planetFilter_select"
					value={planet}
					label="Planet"
					onChange={handleChange}
					style={{ textTransform: "capitalize" }}
				>
					<MenuItem value="All">
						<em>All</em>
					</MenuItem>
					{data?.bodies.map((body) => (
						<MenuItem
							value={body}
							key={body}
							style={{ textTransform: "capitalize" }}
						>
							{body}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</>
	);
};

export default BodiesComponent;
