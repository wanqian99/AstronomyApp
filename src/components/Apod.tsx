import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";
import {
	Box,
	Card,
	CardContent,
	Stack,
	Typography,
	ImageListItem,
} from "@mui/material";

interface APOD {
	copyright: string;
	date: string;
	explanation: string;
	title: string;
	url: string;
}

const Apod = () => {
	const [data, setData] = useState<APOD>();
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		axios
			.get(
				"https://api.nasa.gov/planetary/apod?api_key=dbOSX0vcEIjTHSeQhgvm3y6WOZDHDHCBQJG2toMo",
				{ signal: controller.signal }
			)
			.then((res) => {
				setData(res.data);
				setLoading(false);
				console.log(res.data);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setLoading(false);
			});
		return () => controller.abort();
	}, []);

	if (error) return <p>{error}</p>;
	if (isLoading) return <p>Loading Picture of the Day...</p>;
	return (
		<>
			<Box
				sx={{
					maxWidth: { md: "98%", xs: "100%" },
					marginLeft: "auto",
					marginRight: "0",
				}}
			>
				<Card
					raised={true}
					sx={{
						backgroundColor: "background.default",
						margin: "0 auto",
						padding: "10px 30px",
					}}
				>
					<CardContent>
						<Stack
							direction={"row"}
							justifyContent="space-between"
							alignItems="center"
						>
							<Typography
								gutterBottom
								color="divider"
								variant="h5"
							>
								{data?.title}
							</Typography>
							<Typography
								gutterBottom
								color="text.primary"
								variant="subtitle1"
							>
								{data?.date}
							</Typography>
						</Stack>

						<ImageListItem
							sx={{
								width: "100%",
								height: "auto",
								margin: "0 auto",
							}}
						>
							<img
								src={data?.url}
								alt={`Solar System planets image`}
								loading="lazy"
							/>
						</ImageListItem>
						<Typography
							gutterBottom
							// color="divider"
							variant="subtitle2"
							sx={{ marginTop: "2%" }}
						>
							{data?.explanation}
						</Typography>

						<Typography
							gutterBottom
							color="divider"
							variant="subtitle2"
							textAlign="right"
						>
							Copyright: {data?.copyright}
						</Typography>
					</CardContent>
				</Card>
			</Box>
		</>
	);
};

export default Apod;
