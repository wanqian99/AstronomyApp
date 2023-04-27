import useBodies from "../hooks/useBodies";

interface Props {
	onSelectBody: (body: string) => void;
}

const BodiesComponent = ({ onSelectBody }: Props) => {
	const { data, error, isLoading } = useBodies();

	if (error) return <p>{error}</p>;
	if (isLoading) return <p>Loading Bodies...</p>;

	return (
		<>
			{data?.bodies.map((body) => (
				<button onClick={() => onSelectBody(body)} key={body}>
					{body}
				</button>
			))}
		</>
	);
};

export default BodiesComponent;
