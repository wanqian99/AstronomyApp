import axios, { CanceledError } from "axios";
import { useState, useEffect } from "react";


interface APOD {
	copyright: string;
	date: string;
	explanation: string;
	title: string;
	url: string;
}

const useAPOD = () => {
    const [data, setData] = useState<APOD>();
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		axios
			.get(
				// "https://api.nasa.gov/planetary/apod?api_key=dbOSX0vcEIjTHSeQhgvm3y6WOZDHDHCBQJG2toMo",
                "/api/apod",
				{ signal: controller.signal }
			)
			.then((res) => {
				setData(res.data);
                console.log(res.data)
				setLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setLoading(false);
			});
		return () => controller.abort();
	}, []);

    return { data, error, isLoading };
}
export default useAPOD;