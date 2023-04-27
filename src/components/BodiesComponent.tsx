import useBodies from "../hooks/useBodies";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useContext, useState } from "react";
import { ColorModeContext } from "../theme";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

interface Props {
	onSelectBody: (body: string) => void;
}

const BodiesComponent = ({ onSelectBody }: Props) => {
	const { data, error, isLoading } = useBodies();
	const [planet, setPlanet] = useState("");
	const { mode, toggleColorMode } = useContext(ColorModeContext);

	if (error) return <p>{error}</p>;
	if (isLoading) return <p>Loading Bodies...</p>;

	const handleChange = (event: SelectChangeEvent) => {
		setPlanet(event.target.value);
		onSelectBody(event.target.value);
	};

	return (
		<>
			{/* {data?.bodies.map((body) => (
				<button onClick={() => onSelectBody(body)} key={body}>
					{body}
				</button>
			))} */}
			{mode} mode
			<IconButton
				sx={{ ml: 1 }}
				onClick={toggleColorMode}
				color="inherit"
			>
				{mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
			</IconButton>
			<FormControl sx={{ m: 1, minWidth: 120 }} color="primary">
				<InputLabel id="planetFilter">Planet</InputLabel>
				<Select
					labelId="planetFilter"
					id="planetFilter_select"
					value={planet}
					label="Planet"
					onChange={handleChange}
				>
					<MenuItem value="">
						<em>None</em>
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
