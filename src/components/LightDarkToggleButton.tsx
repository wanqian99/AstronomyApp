import { useContext, useState } from "react";
import { ColorModeContext } from "../theme";
import { Box, IconButton, Typography } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { purple } from "@mui/material/colors";

const LightDarkToggleButton = () => {
	const { mode, toggleColorMode } = useContext(ColorModeContext);
	return (
		<Box
			textTransform={"capitalize"}
			sx={{
				display: { xs: "inline-flex", sm: "inline" },
				mt: { xs: 5, sm: "none" },
				justifyContent: { xs: "space-between", sm: "none" },
				borderWidth: { xs: "2px", sm: 0 },
				borderStyle: { xs: "solid", sm: "none" },
				borderColor: { xs: "secondary.main", sm: "none" },
				borderRadius: { xs: "10px", sm: 0 },
				padding: { xs: "5px 15px", sm: 0 },
			}}
		>
			<Typography
				sx={{
					display: { xs: "block", sm: "none" },
					alignSelf: "center",
				}}
			>
				{mode} mode
			</Typography>

			<IconButton
				sx={{ ml: 1 }}
				onClick={toggleColorMode}
				color="secondary"
			>
				{mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
			</IconButton>
		</Box>
	);
};

export default LightDarkToggleButton;
