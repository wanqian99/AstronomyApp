import { BodyQuery } from "../App";
import useData from "./useData";

export interface Bodies {
	// data: {
	bodies: string[];
	// };
}

const useBodies = () =>
    // api path link, axios request config, dependencies
    useData<Bodies>("/bodies", {
        params: {
            // latitude: "33.775867",
            // longitude: "-84.39733",
            // from_date: "2017-12-20",
            // to_date: "2017-12-20",
            // // to_date: "2017-12-21",
            // elevation: 1,
            // time: "12:00:00",
        },
    });

export default useBodies;