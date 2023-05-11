import  axios, { CanceledError } from "axios";
import { useState, useEffect } from "react";

interface moonPhaseStyle {
    moonStyle: string
    backgroundStyle: string
    backgroundColor: string
    headingColor: string
    textColor: string
}

interface observerParams_moonChart {
    latitude: number,
    longitude: number,
    date: string,
}

interface viewParams {
    type: string,
    orientation: string
}

export interface MoonPhaseParams {
    format: string
	style: moonPhaseStyle
    observer: observerParams_moonChart
	view: viewParams
}

interface MoonPhaseImage {
    imageUrl: string
}

const useMoonPhase = (moonPhaseParams: MoonPhaseParams) => {
    const [data, setData] = useState<MoonPhaseImage>();
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
        setLoading(true);

        // fetch from backend
        axios
			.post("/api/studio/moon-phase", moonPhaseParams, { signal: controller.signal })
			.then((res) => {
				setData(res.data.data);
				setLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setLoading(false);
			});

		return () => controller.abort();
	}, [moonPhaseParams]);

    return { data, error, isLoading };
}

export default useMoonPhase;