import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Button,
	Card,
	CardContent,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import moment from "moment";
import { useEffect } from "react";

const schema = z.object({
	latitude: z
		.number({ invalid_type_error: "Latitude is required" })
		.min(-90, { message: "Latitude should be more than -90" })
		.max(90, { message: "Latitude should be less than 90" }),
	longitude: z
		.number({ invalid_type_error: "Longitude is required" })
		.min(-180, { message: "Longitude should be more than -180" })
		.max(180, { message: "Longitude should be less than 180" }),
	from_date: z
		.string()
		.nonempty({ message: "Start date should not be empty" }),
	to_date: z.string().nonempty({ message: "End date should not be empty" }),
	elevation: z
		.number({ invalid_type_error: "Elevation is required" })
		.min(1, { message: "Elevation should be more than 1" })
		.max(5000, { message: "Elevation should be less than 5000" }),
	time: z.string({ invalid_type_error: "Time is required" }),
});

type FormData = z.infer<typeof schema>;

interface Props {
	submitForm: (data: FormData) => void;
}

const PlanetsForm = ({ submitForm }: Props) => {
	const {
		register,
		handleSubmit,
		reset,
		control,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	// set default date and time values to current value
	// else the default values are undefined
	useEffect(() => {
		reset({
			from_date: new Date().toString(),
			to_date: new Date().toString(),
			time: new Date().toString(),
		});
	}, []);

	const checkDateRange = (data: FormData) => {
		const startDate = Date.parse(data.from_date);
		const endDate = Date.parse(data.to_date);
		const maxDateRange = 31;
		const difference = (endDate - startDate) / (86400000 * maxDateRange);

		if (difference < 0) {
			alert("The start date must come before the end date.");
			return false;
		}
		if (difference >= 1) {
			alert("Date range should be at most 31 days apart.");
			return false;
		}

		return true;
	};

	const formatTime = (data: FormData) => {
		// console.log(data.time);
		data.time = moment(data.time).format("HH:mm:ss");
		// console.log(data.time);
	};

	return (
		<>
			<Card
				raised={true}
				sx={{
					// maxWidth: "90%",
					// margin: "auto",
					backgroundColor: "background.default",
				}}
			>
				<CardContent>
					<Typography
						// sx={{ fontSize: 16 }}
						gutterBottom
						color="divider"
						variant="subtitle1"
						sx={{ ml: 1, mt: 1, mb: 3 }}
					>
						Planet Query Form:
					</Typography>
					<form
						onSubmit={handleSubmit((data) => {
							// check date range
							// if function returns true, change time data to correct format,
							// and submit form
							if (checkDateRange(data)) {
								formatTime(data);
								submitForm(data);
								// reset();
							}
						})}
					>
						<Stack spacing={2}>
							<Stack direction={"row"} spacing={1}>
								<TextField
									fullWidth
									label="Latitude"
									type="number"
									size="small"
									variant="outlined"
									{...register("latitude", {
										valueAsNumber: true,
									})}
									error={!!errors.latitude}
									helperText={errors.latitude?.message}
									className="form"
								/>
								<TextField
									fullWidth
									label="Longitude"
									type="number"
									size="small"
									variant="outlined"
									{...register("longitude", {
										valueAsNumber: true,
									})}
									error={!!errors.longitude}
									helperText={errors.longitude?.message}
									className="form"
								/>
							</Stack>
							<Stack direction={"row"} spacing={1}>
								<Controller
									name="from_date"
									control={control}
									render={({
										field: {
											onChange,
											value,
											...from_date
										},
										fieldState: { error },
									}) => (
										<DatePicker
											inputFormat="YYYY-MM-DD"
											value={value}
											onChange={(e) =>
												onChange(
													moment(e).format(
														"YYYY-MM-DD"
													)
												)
											}
											renderInput={(params) => (
												<TextField
													{...params}
													fullWidth
													size="small"
													label="Start Date"
													error={Boolean(error)}
													helperText={error?.message}
													className="form"
												/>
											)}
											{...from_date}
										/>
									)}
								/>
								<Controller
									name="to_date"
									control={control}
									render={({
										field: { onChange, value, ...to_date },
										fieldState: { error },
									}) => (
										<DatePicker
											inputFormat="YYYY-MM-DD"
											value={value}
											onChange={(e) =>
												onChange(
													moment(e).format(
														"YYYY-MM-DD"
													)
												)
											}
											renderInput={(params) => (
												<TextField
													{...params}
													fullWidth
													size="small"
													label="End Date"
													error={Boolean(error)}
													helperText={error?.message}
													className="form"
												/>
											)}
											{...to_date}
										/>
									)}
								/>
							</Stack>
							<Stack direction={"row"} spacing={1}>
								<TextField
									fullWidth
									label="Elevation"
									type="number"
									size="small"
									variant="outlined"
									{...register("elevation", {
										valueAsNumber: true,
									})}
									error={!!errors.elevation}
									helperText={errors.elevation?.message}
									className="form"
								/>
								<Controller
									name="time"
									control={control}
									render={({
										field: { onChange, value, ...time },
										fieldState: { error },
									}) => (
										<TimePicker
											inputFormat="HH:mm A"
											value={value}
											onChange={(e) =>
												onChange(
													moment(e).format(
														"YYYY-MM-DD HH:mm:ss"
													)
												)
											}
											renderInput={(params) => (
												<TextField
													{...params}
													fullWidth
													size="small"
													label="Time"
													error={Boolean(error)}
													helperText={error?.message}
													className="form"
												/>
											)}
											{...time}
										/>
									)}
								/>
							</Stack>
						</Stack>

						<Stack
							direction={"row"}
							spacing={1}
							sx={{ marginTop: "10px" }}
						>
							<Button
								type="reset"
								size="medium"
								variant="contained"
								sx={{
									marginLeft: "auto",
									color: "background.default",
									backgroundColor: "divider",
								}}
								onClick={() => reset()}
							>
								Reset
							</Button>
							<Button
								type="submit"
								size="medium"
								variant="contained"
								sx={{
									color: "background.default",
									backgroundColor: "divider",
								}}
							>
								Submit
							</Button>
						</Stack>
					</form>
				</CardContent>
			</Card>
		</>
	);
};

export default PlanetsForm;
