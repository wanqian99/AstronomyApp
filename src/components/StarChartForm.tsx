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
import StarChartFormSelector_Constellation from "./StarChartFormSelector_Constellation";
import StarChartFormSelector_Style from "./StarChartFormSelector_Style";
import useStarChart from "../hooks/useStarChart";

const observerObject = z.object({
	latitude: z
		.number({ invalid_type_error: "Latitude is required" })
		.min(-90, { message: "Latitude should be more than -90" })
		.max(90, { message: "Latitude should be less than 90" }),
	longitude: z
		.number({ invalid_type_error: "Longitude is required" })
		.min(-180, { message: "Longitude should be more than -180" })
		.max(180, { message: "Longitude should be less than 180" }),
	date: z.string({ invalid_type_error: "Date is required" }),
});

const parametersObject = z.object({
	constellation: z.string({
		invalid_type_error: "Constellation is required",
	}),
});

const viewObject = z.object({
	// type: z.string({ invalid_type_error: "Type is required" }),
	parameters: parametersObject,
});

const schema = z.object({
	style: z.string({ invalid_type_error: "Style is required" }),
	observer: observerObject,
	view: viewObject,

	// latitude: z
	// 	.number({ invalid_type_error: "Latitude is required" })
	// 	.min(-90, { message: "Latitude should be more than -90" })
	// 	.max(90, { message: "Latitude should be less than 90" }),
	// longitude: z
	// 	.number({ invalid_type_error: "Longitude is required" })
	// 	.min(-180, { message: "Longitude should be more than -180" })
	// 	.max(180, { message: "Longitude should be less than 180" }),
	// date: z.string({ invalid_type_error: "Date is required" }),
	// style: z.string({ invalid_type_error: "Style is required" }),
	// // type: z.string({ invalid_type_error: "Type is required" }),
	// constellation: z.string({
	// 	invalid_type_error: "Constellation is required",
	// }),
});

// const schema = z.object({
// 	latitude: z
// 		.number({ invalid_type_error: "Latitude is required" })
// 		.min(-90, { message: "Latitude should be more than -90" })
// 		.max(90, { message: "Latitude should be less than 90" }),
// 	longitude: z
// 		.number({ invalid_type_error: "Longitude is required" })
// 		.min(-180, { message: "Longitude should be more than -180" })
// 		.max(180, { message: "Longitude should be less than 180" }),
// 	date: z.string({ invalid_type_error: "Date is required" }),
// 	style: z.string({ invalid_type_error: "Style is required" }),
// 	// type: z.string({ invalid_type_error: "Type is required" }),
// 	constellation: z.string({
// 		invalid_type_error: "Constellation is required",
// 	}),
// });

type FormData = z.infer<typeof schema>;

interface Props {
	submitForm: (data: FormData) => void;
}

const StarChartForm = ({ submitForm }: Props) => {
	const {
		register,
		handleSubmit,
		reset,
		control,
		setValue,
		getValues,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	// set default date and time values to current value
	// else the default values are undefined
	useEffect(() => {
		setValue("observer.date", moment().format("YYYY-MM-DD"));
		setValue("style", "default");
		setValue("view.parameters.constellation", "and");
		// setValue("view.type", "constellation");
	}, []);

	return (
		<>
			<Card
				raised={true}
				sx={{
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
							console.log("submitted");
							// submit form
							submitForm(data);
							// reset();
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
									{...register("observer.latitude", {
										valueAsNumber: true,
									})}
									error={!!errors.observer?.latitude}
									helperText={
										errors.observer?.latitude?.message
									}
									className="form"
								/>
								<TextField
									fullWidth
									label="Longitude"
									type="number"
									size="small"
									variant="outlined"
									{...register("observer.longitude", {
										valueAsNumber: true,
									})}
									error={!!errors.observer?.longitude}
									helperText={
										errors.observer?.longitude?.message
									}
									className="form"
								/>
							</Stack>
							<Stack direction={"row"} spacing={1}>
								<Controller
									name="observer.date"
									control={control}
									render={({
										field: { onChange, value, ...date },
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
													label="Date"
													error={Boolean(error)}
													helperText={error?.message}
													className="form"
												/>
											)}
											{...date}
										/>
									)}
								/>
							</Stack>
							<Stack direction={"row"} spacing={1}>
								<StarChartFormSelector_Style
									onSelectStyle={(style) =>
										setValue("style", style)
									}
								/>
								<StarChartFormSelector_Constellation
									onSelectConstellation={(constellation) =>
										setValue(
											"view.parameters.constellation",
											constellation
										)
									}
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
								onClick={() => getValues("observer.date")}
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

export default StarChartForm;
