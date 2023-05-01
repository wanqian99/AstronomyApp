import axios, { CanceledError } from "axios";
import { useState, useEffect } from "react";
import starChartApiClient from "../services/starChartApiClient";

interface observerParams_starChart {
    latitude: number,
    longitude: number,
    date: string,
}

interface viewParams {
    type: string,
    parameters : {
        constellation: string
    }
}

export interface StarChartParams {
	style: string;
    observer: observerParams_starChart
	view: viewParams
}

interface StarChartImage {
    imageUrl: string
}

const useStarChart = (starChartParams: StarChartParams) => {
    const [data, setData] = useState<StarChartImage>();
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();

		starChartApiClient
			.post("", starChartParams, { signal: controller.signal })
			.then((res) => {
				setData(res.data.data);
				setLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setLoading(false);
                console.log(err)
			});

		return () => controller.abort();
	}, [starChartParams]);

    return { data, error, isLoading };
}

export default useStarChart;