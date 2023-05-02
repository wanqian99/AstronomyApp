import { useState } from "react";
import {
	SelectChangeEvent,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from "@mui/material";

interface Props {
	onSelectMoonStyle: (style: string) => void;
}

const MoonPhaseFormSelector_MoonStyle = ({ onSelectMoonStyle }: Props) => {
	const [moonStyle, setMoonStyle] = useState("default");

	const handleChange = (event: SelectChangeEvent) => {
		// set style to show selected moon style on dropdown
		setMoonStyle(event.target.value);
		// parse selected moon style back to parent component
		onSelectMoonStyle(event.target.value);
	};

	return (
		<>
			<FormControl sx={{ width: "50%" }} color="primary" className="form">
				<InputLabel id="moonStyleFilter">Moon Style</InputLabel>
				<Select
					labelId="moonStyleFilter"
					id="moonStyleFilter_select"
					value={moonStyle}
					label="Moon Style"
					onChange={handleChange}
					size="small"
					style={{
						textTransform: "capitalize",
					}}
				>
					<MenuItem value={"default"} key={"default"}>
						Default
					</MenuItem>
					<MenuItem value={"sketched"} key={"sketched"}>
						Sketched
					</MenuItem>
					<MenuItem value={"shaded"} key={"shaded"}>
						Shaded
					</MenuItem>
				</Select>
			</FormControl>
		</>
	);
};

export default MoonPhaseFormSelector_MoonStyle;
