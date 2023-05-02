import { Grid } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../theme";

import lightBackgroundImage from "../assets/planets/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner-copy.jpg";
import darkBackgroundImage from "../assets/planets/beautiful-shining-stars-night-sky.jpg";
import Apod from "./Apod";
import Intro from "./Intro";

const Home = () => {
	const { mode } = useContext(ColorModeContext);

	return (
		<>
			<Grid
				container
				sx={{
					maxWidth: "96%",
					justifyContent: "center",
					margin: "0 auto",
					paddingY: "3%",
					alignContent: "center",
					alignItems: "center",
				}}
			>
				{/* Intro Text */}
				<Grid item xs={11} md={4}>
					<Intro />
				</Grid>
				{/* Astronomy Picture of the Day */}
				<Grid item xs={11} md={8}>
					<Apod />
				</Grid>
			</Grid>
		</>
	);
};

export default Home;
