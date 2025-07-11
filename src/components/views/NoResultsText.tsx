import PropTypes from 'prop-types';

interface FunctionProps {
	query: string;
}

function NoResultsText({ query }: FunctionProps) {
	return (
		<p className="text-center font-medium italic">
			No results for &lsquo;{query}&rsquo;. Press Enter to see more results
		</p>
	);
}

NoResultsText.propTypes = {
	query: PropTypes.string.isRequired,
};

export default NoResultsText;
