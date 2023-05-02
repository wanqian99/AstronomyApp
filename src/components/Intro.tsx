import { Box, Typography } from "@mui/material";

const Intro = () => {
	return (
		<>
			<Box
				sx={{
					maxWidth: { md: "98%", xs: "100%" },
					marginLeft: "0",
					marginRight: "auto",
					marginBottom: "10%",
				}}
			>
				<Typography
					color="secondary.main"
					variant="h3"
					fontFamily="Roboto"
					textTransform="uppercase"
					fontWeight="900"
					className="introText"
				>
					Explore <br /> the Planets
				</Typography>
				<Typography color="divider" variant="h6">
					Astronomical Information about the universe
				</Typography>
				<Typography
					color="text.primary"
					variant="subtitle1"
					marginTop="5%"
				>
					Welcome to our astronomy website, where you can explore the
					fascinating world of planets and their positions in the
					night sky.
				</Typography>
				<Typography
					color="text.primary"
					variant="subtitle1"
					marginTop="5%"
				>
					With just a few clicks, you can access detailed data on the
					position of all the major planets in our solar system,
					including their altitude, azimuth, and distance from Earth.
					Our website provides a wealth of information that will
					enhance your understanding and appreciation of the celestial
					objects above us.
				</Typography>
				<Typography
					color="text.primary"
					variant="subtitle1"
					marginTop="5%"
				>
					Explore the wonders of the cosmos with us, and experience
					the thrill of discovering the position of planets in the
					night sky.
				</Typography>
			</Box>
		</>
	);
};

export default Intro;
