import { useState } from "react";
// import {
// 	AppBar,
// 	Button,
// 	Divider,
// 	Drawer,
// 	IconButton,
// 	List,
// 	ListItem,
// 	ListItemButton,
// 	ListItemText,
// 	Toolbar,
// 	Typography,
// } from "@mui/material";

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
import Button from "@mui/material/Button";

import NightsStayRoundedIcon from "@mui/icons-material/NightsStayRounded";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { Link, Outlet } from "react-router-dom";

interface Props {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Planets", "Star Chart", "Moon Phase"];

const NavBar = (props: Props) => {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				<NightsStayRoundedIcon
					fontSize="large"
					color="primary"
					sx={{ fontSize: "45px" }}
				/>
				<AutoAwesomeIcon
					fontSize="small"
					color="primary"
					sx={{ marginLeft: "-20px", marginBottom: "16px" }}
				/>
			</Typography>
			<Divider />
			<List>
				<Link to="/" style={{ textDecoration: "none", color: "black" }}>
					<ListItem>
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText>Home</ListItemText>
						</ListItemButton>
					</ListItem>
				</Link>

				{navItems.map((item) => (
					<Link
						key={item}
						to={`${item}`}
						style={{ textDecoration: "none", color: "black" }}
					>
						<ListItem disablePadding>
							<ListItemButton sx={{ textAlign: "center" }}>
								<ListItemText primary={item} />
							</ListItemButton>
						</ListItem>
					</Link>
				))}
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<>
			<AppBar component="nav">
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
						<Link to="/">
							<Button sx={{ color: "#fff" }}>
								<NightsStayRoundedIcon
									fontSize="large"
									sx={{ fontSize: "45px" }}
								/>
								<AutoAwesomeIcon
									fontSize="small"
									sx={{
										marginLeft: "-20px",
										marginBottom: "12px",
									}}
								/>
							</Button>
						</Link>
					</Typography>

					<Box sx={{ display: { xs: "none", sm: "block" } }}>
						{navItems.map((item) => (
							<Link
								to={`${item}`}
								key={item}
								style={{ textDecoration: "none" }}
							>
								<Button sx={{ color: "#fff" }}>{item}</Button>
							</Link>
						))}
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
