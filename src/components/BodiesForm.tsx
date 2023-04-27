import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
	// description: z
	// 	.string()
	// 	.min(3, { message: "Description should be at least 3 characters" })
	// 	.max(50, { message: "Description should be less than 50 characters" }),
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
	// .min(3, { message: "Description should be at least 3 characters" })
	// .max(50, { message: "Description should be less than 50 characters" }),
	to_date: z.string().nonempty({ message: "End date should not be empty" }),
	// .min(3, { message: "Description should be at least 3 characters" })
	// .max(50, { message: "Description should be less than 50 characters" }),
	// from_date: z
	// 	.string({ invalid_type_error: "Start Date is required" })
	// 	.transform((date) => date.toString()),
	// to_date: z.date({ invalid_type_error: "End Date is required" }),
	elevation: z
		.number({ invalid_type_error: "Elevation is required" })
		.min(1, { message: "Elevation should be more than 1" })
		.max(5000, { message: "Elevation should be less than 5000" }),
	time: z.string({ invalid_type_error: "Time is required" }),
	// .min(3, { message: "Time should be at least 3 characters" })
	// .max(50, { message: "Time should be less than 50 characters" }),
});

// latitude: number;
// 	longitude: number;
// 	from_date: Date;
// 	to_date: Date;
// 	elevation: number;
// 	time: string;

type FormData = z.infer<typeof schema>;

interface Props {
	submitForm: (data: FormData) => void;
}

const BodiesForm = ({ submitForm }: Props) => {
	const {
		register,
		handleSubmit,
		reset,
		getValues,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	const checkDateRange = (data: FormData) => {
		const startDate = Date.parse(data.from_date);
		const endDate = Date.parse(data.to_date);
		const difference = (endDate - startDate) / (86400000 * 7);
		if (difference < 0) {
			alert("The start date must come before the end date.");
			return false;
		}
		if (difference <= 1) {
			alert("The range must be at least seven days apart.");
			return false;
		}
		console.log(startDate);
		console.log(endDate);
	};

	return (
		<>
			<form
				onSubmit={handleSubmit((data) => {
					checkDateRange(data);

					submitForm(data);
					reset();
				})}
			>
				<div className="mb-3">
					<label htmlFor="latitude" className="form-label">
						Latitude
					</label>
					<input
						id="latitude"
						type="text"
						className="form-control"
						{...register("latitude", { valueAsNumber: true })}
					/>
					{errors.latitude && (
						<p className="text-danger">{errors.latitude.message}</p>
					)}
				</div>
				<div className="mb-3">
					<label htmlFor="longitude" className="form-label">
						Longitude
					</label>
					<input
						id="longitude"
						type="text"
						className="form-control"
						{...register("longitude", { valueAsNumber: true })}
					/>
					{errors.longitude && (
						<p className="text-danger">
							{errors.longitude.message}
						</p>
					)}
				</div>
				{/* <div className="mb-3">
					<label htmlFor="from_date" className="form-label">
						Start Date
					</label>
					<input
						id="from_date"
						type="date"
						className="form-control"
						onInput={() => console.log(getValues("from_date"))}
						{...register("from_date", {
							// setValueAs: (v) => v.toString(),
							// valueAsDate: true,
							// valueAsNumber: true,
						})}
					/>
					{errors.from_date && (
						<p className="text-danger">
							{errors.from_date.message}
						</p>
					)}
				</div>
				<div className="mb-3">
					<label htmlFor="to_date" className="form-label">
						End Date
					</label>
					<input
						id="to_date"
						type="date"
						className="form-control"
						onInput={() => console.log(getValues("to_date"))}
						{...register("to_date", {
							// setValueAs: (v) => v.toString(),
							// valueAsDate: true,
							// valueAsNumber: true,
						})}
					/>
					{errors.to_date && (
						<p className="text-danger">{errors.to_date.message}</p>
					)}
				</div> */}
				<div className="mb-3">
					<label htmlFor="date_range" className="form-label">
						Date Range
					</label>
					<input
						id="date_range"
						type="date"
						className="form-control"
						onInput={() => console.log(getValues("from_date"))}
						{...register("from_date")}
					/>
					{" - "}
					<input
						id="date_range"
						type="date"
						className="form-control"
						onInput={() => console.log(getValues("to_date"))}
						{...register("to_date")}
					/>
					{errors.from_date && (
						<p className="text-danger">
							{errors.from_date.message}
						</p>
					)}
					{errors.to_date && (
						<p className="text-danger">{errors.to_date.message}</p>
					)}
				</div>
				<div className="mb-3">
					<label htmlFor="elevation" className="form-label">
						Elevation
					</label>
					<input
						id="elevation"
						type="number"
						className="form-control"
						{...register("elevation", {
							valueAsNumber: true,
						})}
					/>
					{errors.elevation && (
						<p className="text-danger">
							{errors.elevation.message}
						</p>
					)}
				</div>
				<div className="mb-3">
					<label htmlFor="time" className="form-label">
						Time
					</label>
					<input
						id="time"
						type="time"
						// value="16:32:55"
						className="form-control"
						onInput={() => console.log(getValues("time"))}
						{...register("time", {
							// value: "12:00:00",
							setValueAs: (v) => v + ":00",
						})}
					/>
					{errors.time && (
						<p className="text-danger">{errors.time.message}</p>
					)}
				</div>
				<button
					type="submit"
					className="btn btn-primary"
					onClick={() => {
						console.log(typeof getValues("time"));
						// setDate(getValues("from_date"));
					}}
				>
					Submit
				</button>
			</form>
		</>
	);
};

export default BodiesForm;
