import useStarChart, { StarChartParams } from "../hooks/useStarChart";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { constellations } from "./StarChartFormSelector_Constellation";
import moment from "moment";

interface Props {
	starChartParams: StarChartParams;
}

const StarChartCard = ({ starChartParams }: Props) => {
	const { data, error, isLoading, params } = useStarChart(starChartParams);

	var constellationValue;

	Object.entries(constellations).map(([key, value]) => {
		if (key === params?.constellationKey) {
			constellationValue = value;
		}
	});

	if (error) return <p>{error}</p>;
	if (isLoading) return <p>Loading Star Chart...</p>;

	return (
		<>
			{starChartParams.view !== undefined && (
				<Card
					raised={true}
					sx={{
						backgroundColor: "background.default",
					}}
				>
					<CardContent>
						<Stack
							direction="row"
							justifyContent="space-between"
							alignItems="center"
						>
							<Typography
								// sx={{ fontSize: 16 }}
								color="text.primary"
								variant="h5"
								sx={{ ml: 1, mt: 1, mb: 2 }}
							>
								Star Chart: {constellationValue}[
								{params?.constellationKey}]
							</Typography>

							<Typography
								// sx={{ fontSize: 16 }}
								color="divider"
								variant="subtitle1"
								sx={{ ml: 1, mt: 1, mb: 2 }}
							>
								{moment(params?.date).format("Do MMM YYYY")}
							</Typography>
						</Stack>
						<CardMedia
							component="img"
							alt="star chart"
							image={data?.imageUrl}
						/>
					</CardContent>
				</Card>
			)}
		</>
	);
};

export default StarChartCard;
