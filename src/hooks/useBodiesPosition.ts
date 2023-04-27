import { BodyQuery } from "../App";
import useData from "./useData";

interface BodiesPositionCellsPosition_altitude_azimuth {
    altitude: {
        degrees: number;
        string: string;
    };
    azimuth: {
        degrees: number;
        string: string;
    };
}

interface BodiesPositionCellsPosition {
    horizontal: BodiesPositionCellsPosition_altitude_azimuth;
    horizonal: BodiesPositionCellsPosition_altitude_azimuth;
    equatorial: {
        rightAscension: {
            hours: number;
            string: string;
        };
        declination: {
            degrees: number;
            string: string;
        };
    };
    constellation: {
        id: string;
        short: string;
        name: string;
    };
}

interface BodiesPositionRow {
	entry: {
		id: string;
		name: string;
	};
	cells: [
        {
            date: Date,
            id: string,
            name: string,
            distance: {
                fromEarth: {
                    au: number;
                    km: number;
                };
            },
            position: BodiesPositionCellsPosition,
            extraInfo: {
                elongation: number;
                magnitude: number;
            }
        }
    ];
}

interface BodiesPositionTable {
	table: {
		// header: string[];
		rows: BodiesPositionRow[];
	};
}
const useBodiesPosition = (bodyQuery: BodyQuery) =>
    // api path link, axios request config, dependencies
    useData<BodiesPositionTable>(
        '/bodies/positions/' + bodyQuery.body,
        {params: {
            // latitude: "33.775867",
            // longitude: "-84.39733",
            // from_date: "2017-12-20",
            // to_date: "2023-04-09",
            // to_date: "2017-12-21",
            // elevation: 1,
            // time: "12:00:00",

            latitude: bodyQuery.latitude,
            longitude: bodyQuery.longitude,
            from_date: bodyQuery.from_date,
            to_date: bodyQuery.to_date,
            elevation: bodyQuery.elevation,
            time: bodyQuery.time,
        }
        }, 
        [bodyQuery]);

export default useBodiesPosition;