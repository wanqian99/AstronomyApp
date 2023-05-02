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
import useAPOD from "../hooks/useAPOD";
import moment from "moment";

const Apod = () => {
	const { data, error, isLoading } = useAPOD();

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
								{moment(data?.date).format("Do MMM YYYY")}
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
