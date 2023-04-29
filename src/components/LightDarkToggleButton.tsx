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
				justifyContent: { xs: "space-between", sm: "none" },
				borderWidth: { xs: "1px", sm: 0 },
				borderStyle: { xs: "solid", sm: "none" },
				borderColor: { xs: "secondary.main", sm: "none" },
				borderRadius: { xs: "8px", sm: 0 },
				padding: { xs: "5px 10px", sm: 0 },
			}}
		>
			<Typography
				sx={{
					display: { xs: "block", sm: "none" },
					alignSelf: "center",
					color: "secondary.main",
				}}
			>
				{mode} mode
			</Typography>

			<IconButton
				sx={{
					ml: { xs: 8, sm: 0 },
					color: "secondary.main",
				}}
				onClick={toggleColorMode}
			>
				{mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
			</IconButton>
		</Box>
	);
};

export default LightDarkToggleButton;
