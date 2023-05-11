import { useContext } from "react";
import { ColorModeContext } from "../theme";
import { Box, IconButton, Typography } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

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
				borderColor: { xs: "divider", sm: "none" },
				borderRadius: { xs: "8px", sm: 0 },
				padding: { xs: "5px 10px", sm: 0 },
			}}
		>
			<Typography
				sx={{
					display: { xs: "block", sm: "none" },
					alignSelf: "center",
					color: "divider",
				}}
			>
				{mode} mode
			</Typography>

			<IconButton
				sx={{
					ml: { xs: 8, sm: 0 },
					color: { xs: "divider", sm: "#7986cb" },
				}}
				onClick={toggleColorMode}
			>
				{mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
			</IconButton>
		</Box>
	);
};

export default LightDarkToggleButton;
