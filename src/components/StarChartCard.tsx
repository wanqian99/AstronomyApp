import React from "react";
import useStarChart, { StarChartParams } from "../hooks/useStarChart";

interface Props {
	starChartParams: StarChartParams;
}

const StarChartCard = ({ starChartParams }: Props) => {
	const { data, error, isLoading } = useStarChart(starChartParams);
	return (
		<>
			<div>ahh</div>
			{data?.imageUrl}
		</>
	);
};

export default StarChartCard;
