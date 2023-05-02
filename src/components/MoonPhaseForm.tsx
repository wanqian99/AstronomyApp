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
import { DatePicker } from "@mui/x-date-pickers";
import moment from "moment";
import { useEffect } from "react";
import MoonPhaseFormSelector_ViewType from "./MoonPhaseFormSelector_ViewType";
import MoonPhaseFormSelector_MoonStyle from "./MoonPhaseFormSelector_MoonStyle";
import MoonPhaseFormSelector_BackgroundStyle from "./MoonPhaseFormSelector_BackgroundStyle";

const styleObject = z.object({
	moonStyle: z.string({ invalid_type_error: "Moon Style is required" }),
	backgroundStyle: z.string({
		invalid_type_error: "Background Style is required",
	}),
	// backgroundColor: z.string({ invalid_type_error: "Background Color is required" }),
	// headingColor: z.string({ invalid_type_error: "Heading Color is required" }),
	// textColor: z.string({ invalid_type_error: "Text Color is required" }),
});

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

const viewObject = z.object({
	type: z.string({ invalid_type_error: "Type is required" }),
});

const schema = z.object({
	style: styleObject,
	observer: observerObject,
	view: viewObject,
});

type FormData = z.infer<typeof schema>;

interface Props {
	submitForm: (data: FormData) => void;
}

const MoonPhaseForm = ({ submitForm }: Props) => {
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

	// set default date, view type, moon style and background style values
	// else the default values are undefined
	useEffect(() => {
		setValue("observer.date", moment().format("YYYY-MM-DD"));
		setValue("view.type", "portrait-simple");
		setValue("style.moonStyle", "default");
		setValue("style.backgroundStyle", "solid");
	}, []);

	return (
		<>
			<Card
				raised={true}
				sx={{
					backgroundColor: "background.default",
					marginBottom: "10%",
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
						Moon Chart Query Form:
					</Typography>
					<form
						onSubmit={handleSubmit((data) => {
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
								<MoonPhaseFormSelector_ViewType
									onSelectViewType={(viewType) =>
										setValue("view.type", viewType)
									}
								/>
								<MoonPhaseFormSelector_MoonStyle
									onSelectMoonStyle={(moonStyle) =>
										setValue("style.moonStyle", moonStyle)
									}
								/>
								<MoonPhaseFormSelector_BackgroundStyle
									onSelectBackgroundStyle={(
										backgroundStyle
									) =>
										setValue(
											"style.backgroundStyle",
											backgroundStyle
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

export default MoonPhaseForm;
