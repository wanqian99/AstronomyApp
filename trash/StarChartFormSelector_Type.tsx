import { useState } from "react";
import {
	SelectChangeEvent,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from "@mui/material";

interface Props {
	onSelectType: (type: string) => void;
}

const StarChartFormSelector_Type = ({ onSelectType }: Props) => {
	const [type, setType] = useState("");

	const handleChange = (event: SelectChangeEvent) => {
		// set style to show selected style on dropdown
		setType(event.target.value);
		// parse selected style back to parent component
		onSelectType(event.target.value);
	};
	return (
		<>
			<FormControl sx={{ width: "50%" }} color="primary" className="form">
				<InputLabel id="typeFilter">Type</InputLabel>
				<Select
					labelId="typeFilter"
					id="typeFilter_select"
					value={type}
					label="Type"
					onChange={handleChange}
					size="small"
					style={{
						textTransform: "capitalize",
					}}
				>
					<MenuItem value={"default"} key={"default"}>
						Area
					</MenuItem>
					<MenuItem value={"inverted"} key={"inverted"}>
						Constellation
					</MenuItem>
				</Select>
			</FormControl>
		</>
	);
};

export default StarChartFormSelector_Type;
