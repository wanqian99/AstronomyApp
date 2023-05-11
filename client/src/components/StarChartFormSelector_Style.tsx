import { useState } from "react";
import {
	SelectChangeEvent,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from "@mui/material";

interface Props {
	onSelectStyle: (style: string) => void;
}

const StarChartFormSelector_Style = ({ onSelectStyle }: Props) => {
	const [style, setStyle] = useState("default");

	const handleChange = (event: SelectChangeEvent) => {
		// set style to show selected style on dropdown
		setStyle(event.target.value);
		// parse selected style back to parent component
		onSelectStyle(event.target.value);
	};

	return (
		<>
			<FormControl sx={{ width: "50%" }} color="primary" className="form">
				<InputLabel id="styleFilter">Style</InputLabel>
				<Select
					labelId="styleFilter"
					id="styleFilter_select"
					value={style}
					label="Style"
					onChange={handleChange}
					size="small"
					style={{
						textTransform: "capitalize",
					}}
				>
					<MenuItem value={"default"} key={"default"}>
						Default
					</MenuItem>
					<MenuItem value={"inverted"} key={"inverted"}>
						Inverted
					</MenuItem>
					<MenuItem value={"navy"} key={"navy"}>
						Navy
					</MenuItem>
					<MenuItem value={"red"} key={"red"}>
						Red
					</MenuItem>
				</Select>
			</FormControl>
		</>
	);
};

export default StarChartFormSelector_Style;
