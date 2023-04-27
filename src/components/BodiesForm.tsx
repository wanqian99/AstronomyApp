import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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

const BodiesForm = ({ submitForm }: Props) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

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

	return (
		<>
			<h3>Form: </h3>
			<form
				onSubmit={handleSubmit((data) => {
					// check date range
					// if function returns true, submit and reset form
					if (checkDateRange(data)) {
						submitForm(data);
						reset();
					}
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
				<div className="mb-3">
					<label htmlFor="date_range" className="form-label">
						Date Range
					</label>
					<input
						id="date_range"
						type="date"
						className="form-control"
						{...register("from_date")}
					/>
					{" - "}
					<input
						id="date_range"
						type="date"
						className="form-control"
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
						className="form-control"
						{...register("time", {
							setValueAs: (v) => v + ":00",
						})}
					/>
					{errors.time && (
						<p className="text-danger">{errors.time.message}</p>
					)}
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</>
	);
};

export default BodiesForm;
