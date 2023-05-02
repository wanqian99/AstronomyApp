import { Card, CardContent, ImageListItem, Typography } from "@mui/material";
import { ObserverParams } from "../App";
import solarSystem from "../assets/planets/solarSystem.png";
// import sun from "../assets/planets/sun.png";
// import moon from "../assets/planets/moon.png";
// import mercury from "../assets/planets/mercury.png";
// import venus from "../assets/planets/venus.png";
// import earth from "../assets/planets/earth.png";
// import mars from "../assets/planets/sumarsn.png";
// import jupiter from "../assets/planets/jupiter.png";
// import saturn from "../assets/planets/saturn.png";
// import uranus from "../assets/planets/uranus.png";
// import neptune from "../assets/planets/neptune.png";
// import pluto from "../assets/planets/pluto.png";

interface Props {
	observerParams: ObserverParams;
}

const PlanetCard = ({ observerParams }: Props) => {
	return (
		<>
			{/* check observerParams object is not empty */}
			{Object.keys(observerParams).length === 0 ||
			observerParams.planet === "" ? (
				<>
					<Card
						raised={true}
						sx={{
							position: "relative",
							backgroundColor: "background.default",
							// maxWidth: "100%",
							// minHeight: "700px",
							margin: "0 auto",
							marginBottom: "50px",
							padding: "50px 10px",
							paddingBottom: 0,
						}}
					>
						<CardContent>
							<Typography
								gutterBottom
								color="divider"
								variant="h2"
								className="textUnderlay"
							>
								The
							</Typography>
							<ImageListItem
								sx={{
									width: "100%",
									height: "auto",
									margin: "0 auto",
								}}
							>
								<img
									src={solarSystem}
									alt={`Solar System planets image`}
									loading="lazy"
								/>
							</ImageListItem>
							<Typography
								gutterBottom
								// color="divider"
								variant="h3"
								className="textOverlay_solar"
								sx={{ marginTop: "5%" }}
							>
								Solar System
							</Typography>
						</CardContent>
					</Card>
				</>
			) : (
				<>
					<Card
						raised={true}
						sx={{
							position: "relative",
							backgroundColor: "background.default",
							// maxWidth: "100%",
							// minHeight: "700px",
							margin: "0 auto",
							marginBottom: "50px",
							padding: "30px 80px",
						}}
					>
						<CardContent>
							<Typography
								gutterBottom
								color="divider"
								variant="h2"
								className="textUnderlay"
							>
								The
							</Typography>
							<ImageListItem
								sx={{
									width: "100%",
									height: "auto",
									margin: "0 auto",
								}}
							>
								<img
									src={`/static/planets/${observerParams.planet}.png`}
									alt={`${observerParams.planet} planet image`}
									loading="lazy"
								/>
							</ImageListItem>

							<Typography
								gutterBottom
								// color="divider"
								variant="h2"
								className="textOverlay"
							>
								{observerParams.planet}
							</Typography>
						</CardContent>
					</Card>
				</>
			)}
		</>
	);
};

export default PlanetCard;
