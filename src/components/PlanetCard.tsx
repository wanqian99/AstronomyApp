import {
	Box,
	Card,
	CardContent,
	Divider,
	Grid,
	ImageListItem,
	Stack,
	Typography,
} from "@mui/material";
import { ObserverParams } from "../App";

interface Props {
	observerParams: ObserverParams;
}

const PlanetCard = ({ observerParams }: Props) => {
	return (
		<>
			{observerParams.planet && (
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
			)}
		</>
	);
};

export default PlanetCard;
