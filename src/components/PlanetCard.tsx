import { Card, CardContent, ImageListItem, Typography } from "@mui/material";
import { ObserverParams } from "../App";

interface Props {
	observerParams: ObserverParams;
}

const PlanetCard = ({ observerParams }: Props) => {
	return (
		<>
			{observerParams.planet === "" ? (
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
									src={`../src/assets/planets/solarSystem.png`}
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
									src={`../src/assets/planets/${observerParams.planet}.png`}
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
