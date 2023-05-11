import { useState } from "react";
import {
	SelectChangeEvent,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from "@mui/material";

interface Props {
	onSelectBackgroundStyle: (style: string) => void;
}

const MoonPhaseFormSelector_BackgroundStyle = ({
	onSelectBackgroundStyle,
}: Props) => {
	const [backgroundStyle, setBackgroundStyle] = useState("solid");

	const handleChange = (event: SelectChangeEvent) => {
		// set style to show selected background style on dropdown
		setBackgroundStyle(event.target.value);
		// parse selected style back to background parent component
		onSelectBackgroundStyle(event.target.value);
	};

	return (
		<>
			<FormControl sx={{ width: "50%" }} color="primary" className="form">
				<InputLabel id="backgroundStyleFilter">
					Background Style
				</InputLabel>
				<Select
					labelId="backgroundStyleFilter"
					id="backgroundStyleFilter_select"
					value={backgroundStyle}
					label="Background Style"
					onChange={handleChange}
					size="small"
					style={{
						textTransform: "capitalize",
					}}
				>
					<MenuItem value={"stars"} key={"stars"}>
						Stars
					</MenuItem>
					<MenuItem value={"solid"} key={"solid"}>
						Solid
					</MenuItem>
				</Select>
			</FormControl>
		</>
	);
};

export default MoonPhaseFormSelector_BackgroundStyle;
