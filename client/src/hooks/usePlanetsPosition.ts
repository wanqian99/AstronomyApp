import { ObserverParams } from "../App";
import useData from "./useData";

interface PlanetsPositionCellsPosition_altitude_azimuth {
    altitude: {
        degrees: number;
        string: string;
    };
    azimuth: {
        degrees: number;
        string: string;
    };
}

interface PlanetsPositionCellsPosition {
    horizontal: PlanetsPositionCellsPosition_altitude_azimuth;
    horizonal: PlanetsPositionCellsPosition_altitude_azimuth;
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

interface PlanetsPositionRow {
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
            position: PlanetsPositionCellsPosition,
            extraInfo: {
                elongation: number;
                magnitude: number;
            }
        }
    ];
}

interface PlanetsPositionTable {
	table: {
		// header: string[];
		rows: PlanetsPositionRow[];
	};
}
const usePlanetsPosition = (observerParams: ObserverParams) =>
    // api path link, axios request config, dependencies

    // fetch from backend
    useData<PlanetsPositionTable>(
        // fetch from backend
        '/api/bodies/positions',
        {
            params: {
                planet: observerParams.planet,
                latitude: observerParams.latitude,
                longitude: observerParams.longitude,
                from_date: observerParams.from_date,
                to_date: observerParams.to_date,
                elevation: observerParams.elevation,
                time: observerParams.time,
            }
        }, 
        [observerParams]);

export default usePlanetsPosition;