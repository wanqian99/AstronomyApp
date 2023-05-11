import { Card, CardContent, CardMedia } from "@mui/material";
import useMoonPhase, { MoonPhaseParams } from "../hooks/useMoonPhase";

interface Props {
	moonPhaseParams: MoonPhaseParams;
}

const MoonPhaseCard = ({ moonPhaseParams }: Props) => {
	const { data, error, isLoading } = useMoonPhase(moonPhaseParams);

	if (error) return <p>{error}</p>;
	if (isLoading) return <p>Loading Moon Phase...</p>;

	return (
		<>
			<Card
				raised={true}
				sx={{
					backgroundColor: "background.default",
				}}
			>
				<CardContent>
					<CardMedia
						component="img"
						alt="star chart"
						image={data?.imageUrl}
					/>
				</CardContent>
			</Card>
		</>
	);
};

export default MoonPhaseCard;
