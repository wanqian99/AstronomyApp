import { useContext, useEffect, useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import NightsStayRoundedIcon from "@mui/icons-material/NightsStayRounded";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { NavLink, useLocation } from "react-router-dom";
import LightDarkToggleButton from "./LightDarkToggleButton";

import { ColorModeContext } from "../theme";

interface Props {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window?: () => Window;
}

const drawerWidth = 240;
const navItems = {
	planets: "Planets",
	starChart: "Star Chart",
	moonPhase: "Moon Phase",
};

const NavBar = (props: Props) => {
	const location = useLocation();

	const { mode } = useContext(ColorModeContext);

	const { window } = props;
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		// console.log(location);
		// console.log(location.pathname == navItems[1]);
	}, [location.pathname]);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				<NightsStayRoundedIcon
					fontSize="large"
					sx={{ fontSize: "45px", color: "divider" }}
				/>
				<AutoAwesomeIcon
					fontSize="small"
					sx={{
						marginLeft: "-20px",
						marginBottom: "16px",
						color: "divider",
					}}
				/>
			</Typography>
			<Divider />
			<List>
				<NavLink to={"/"} style={{ textDecoration: "none" }}>
					<ListItem disablePadding>
						<ListItemButton
							sx={{ textAlign: "center" }}
							selected={location.pathname === "/" ? true : false}
						>
							<ListItemText
								primary={"Home"}
								sx={{
									color: "text.primary",
								}}
							/>
						</ListItemButton>
					</ListItem>
				</NavLink>
				{Object.entries(navItems).map(([key, value]) => (
					<NavLink
						key={key}
						to={`${key}`}
						style={{
							textDecoration: "none",
						}}
					>
						<ListItem disablePadding>
							<ListItemButton
								sx={{
									textAlign: "center",
								}}
								selected={
									location.pathname === `/${key}`
										? true
										: false
								}
							>
								<ListItemText
									primary={value}
									sx={{ color: "text.primary" }}
								/>
							</ListItemButton>
						</ListItem>
					</NavLink>
				))}
				<LightDarkToggleButton />
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<>
			<CssBaseline />
			<AppBar component="nav" sx={{ bgcolor: "primary.main" }}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>

					<Typography
						variant="h6"
						component="div"
						sx={{
							flexGrow: 1,
							display: { xs: "none", sm: "block" },
						}}
					>
						<NavLink
							to="/"
							style={({ isActive }) => {
								return {
									color: isActive
										? "lemonchiffon"
										: "#7986cb",
								};
							}}
						>
							<ListItem disablePadding>
								<ListItemButton
									sx={{
										textAlign: "left",
										display: "inline-block",
									}}
									selected={
										location.pathname === "/" ? true : false
									}
								>
									<NightsStayRoundedIcon
										fontSize="large"
										sx={{
											fontSize: "45px",
											marginTop: "5px",
										}}
									/>
									<AutoAwesomeIcon
										fontSize="small"
										sx={{
											marginLeft: "-20px",
											marginBottom: "16px",
											marginTop: "5px",
										}}
									/>
								</ListItemButton>
							</ListItem>
						</NavLink>
					</Typography>

					<Box sx={{ display: { xs: "none", sm: "block" } }}>
						{Object.entries(navItems).map(([key, value]) => (
							<NavLink
								to={`${key}`}
								key={key}
								style={({ isActive }) => {
									return {
										display: "inline-block",
										textDecoration: "none",
										borderBottomWidth: isActive
											? "3px"
											: "0px",
										borderBottomStyle: isActive
											? "solid"
											: "none",
										borderBottomColor: isActive
											? mode == "light"
												? "white"
												: "#7986cb"
											: "none",
									};
								}}
							>
								<ListItem disablePadding>
									<ListItemButton
										sx={{
											textAlign: "center",
										}}
										selected={
											location.pathname === `/${key}`
												? true
												: false
										}
									>
										<ListItemText
											primary={value}
											sx={{ color: "white" }}
										/>
									</ListItemButton>
								</ListItem>
							</NavLink>
						))}
					</Box>
					<Box sx={{ display: { xs: "none", sm: "block" } }}>
						<LightDarkToggleButton />
					</Box>
				</Toolbar>
			</AppBar>
			{/* for content to not be blocked by navbar */}
			<Toolbar />
			<Box component="nav">
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</>
	);
};

export default NavBar;
