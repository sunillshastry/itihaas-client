import PropTypes from 'prop-types';

function SearchTotalResults({ length }) {
	return (
		<p className="text-primary-30 text-right text-xs font-bold uppercase">
			Showing {length < 10 ? `0${length}` : length} matches
		</p>
	);
}

SearchTotalResults.propTypes = {
	length: PropTypes.number.isRequired,
};

export default SearchTotalResults;
