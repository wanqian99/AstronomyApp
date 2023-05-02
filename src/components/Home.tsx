import { Grid } from "@mui/material";
import Apod from "./Apod";
import Intro from "./Intro";

const Home = () => {
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
