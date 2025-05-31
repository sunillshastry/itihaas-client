import PropTypes from 'prop-types';

function EntitiesPageNoResult({ query = 'query' }) {
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
