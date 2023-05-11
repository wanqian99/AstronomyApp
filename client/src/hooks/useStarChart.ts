import axios, { CanceledError } from "axios";
import { useState, useEffect } from "react"

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
	style: string
    observer: observerParams_starChart
	view: viewParams
}

interface StarChartImage {
    imageUrl: string
}

interface QueryParams {
    date: string
    constellationKey: string
    // constellationValue: string
}

const useStarChart = (starChartParams: StarChartParams) => {
    const [data, setData] = useState<StarChartImage>();
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);
    const [params, setParams] = useState<QueryParams>();

	useEffect(() => {
		const controller = new AbortController();
        setLoading(true);

		// fetch from backend
        axios
			.post("/api/studio/star-chart", starChartParams, { signal: controller.signal })
			.then((res) => {
				setData(res.data.data);
				setLoading(false);
                setParams({date: starChartParams.observer.date, constellationKey: starChartParams.view.parameters.constellation})
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setLoading(false);
                console.log(err)
			});

		return () => controller.abort();
	}, [starChartParams]);

    return { data, error, isLoading, params };
}

export default useStarChart;