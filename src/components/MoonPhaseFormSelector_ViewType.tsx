import { useState } from "react";
import {
	SelectChangeEvent,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from "@mui/material";

interface Props {
	onSelectViewType: (style: string) => void;
}

const MoonPhaseFormSelector_ViewType = ({ onSelectViewType }: Props) => {
	const [viewType, setViewType] = useState("portrait-simple");

	const handleChange = (event: SelectChangeEvent) => {
		// set style to show selected view type on dropdown
		setViewType(event.target.value);
		// parse selected view type back to parent component
		onSelectViewType(event.target.value);
	};

	return (
		<>
			<FormControl sx={{ width: "50%" }} color="primary" className="form">
				<InputLabel id="viewType">View Type</InputLabel>
				<Select
					labelId="viewType"
					id="viewType_select"
					value={viewType}
					label="View Type"
					onChange={handleChange}
					size="small"
					style={{
						textTransform: "capitalize",
					}}
				>
					<MenuItem value={"portrait-simple"} key={"portrait-simple"}>
						Portrait Simple
					</MenuItem>
					<MenuItem
						value={"landscape-simple"}
						key={"landscape-simple"}
					>
						Landscape Simple
					</MenuItem>
				</Select>
			</FormControl>
		</>
	);
};

export default MoonPhaseFormSelector_ViewType;
