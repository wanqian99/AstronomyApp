import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import ApiClient from "../services/ApiClient";

interface FetchResponse<T> {
    data: T;
}

// <T> generic type function
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T>();
	const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

	useEffect(() => {
        const controller = new AbortController();
        setLoading(true);

		ApiClient
			.get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
			.then((res) => {
                setData(res.data.data);
                setLoading(false);
                // console.log(res.data.data)
            })
			.catch((err) => {
                if(err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

            return () => controller.abort();
        
        // since deps is optional, it can be undefined, cant spread undefined.
        // so if dependencies is true, spread it. else empty array
	}, deps ? [...deps] : []);

    return { data, error, isLoading };
};

export default useData;