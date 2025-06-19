import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

function SuggestionLink({ queryResult, handleLinkClick }) {
	const navigate = useNavigate();

	function handleClick(e) {
		e.preventDefault();
		handleLinkClick();

		// Navigate to respective page(s)
		if (queryResult?.type === 'dynasty') {
			navigate(`/dynasties/${queryResult.slug}`);
		} else if (queryResult?.type === 'ruler') {
			navigate(`/rulers/${queryResult.slug}`);
		}
	}

	return (
		<li
			className="text-primary-400 border-primary-90 ease hover:bg-primary-70 hover:text-primary-800 my-1 rounded-sm border-b p-2 transition-all duration-150 last:border-b-0 hover:underline"
			key={queryResult._id}
		>
			<Link onClick={handleClick}>{queryResult.name}</Link>
		</li>
	);
}

SuggestionLink.propTypes = {
	queryResult: {
		_id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		slug: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
	},
	handleLinkClick: PropTypes.func,
};

export default SuggestionLink;
