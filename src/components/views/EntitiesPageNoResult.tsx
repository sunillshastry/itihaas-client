import PropTypes from 'prop-types';

interface FunctionProps {
	query: string;
}

function EntitiesPageNoResult({ query = 'query' }: FunctionProps) {
	return (
		<h2 className="text-primary mt-4 italic">
			No search matches for &lsquo;{query}&rsquo;. Showing all available content
		</h2>
	);
}

EntitiesPageNoResult.propTypes = {
	query: PropTypes.string.isRequired,
};

export default EntitiesPageNoResult;
