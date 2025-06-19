import PropTypes from 'prop-types';

function NoResultsText({ query }) {
	return (
		<p className="text-center font-medium italic">
			No results for &lsquo;{query}&rsquo;
		</p>
	);
}

NoResultsText.propTypes = {
	query: PropTypes.string.isRequired,
};

export default NoResultsText;
