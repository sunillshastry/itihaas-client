import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

function AutocompleteLink({ queryResult, handleLinkClick }) {
	const navigate = useNavigate();

	function click(e) {
		e.preventDefault();
		handleLinkClick();

		navigate(`/dynasties/${queryResult.slug}`);
	}

	return (
		<li
			className="autocomplete__link"
			key={queryResult._id}
		>
			<Link onClick={click}>{queryResult.name}</Link>
		</li>
	);
}

AutocompleteLink.propTypes = {
	queryResult: {
		_id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		slug: PropTypes.string.isRequired,
	},
	handleLinkClick: PropTypes.func,
};

export default AutocompleteLink;
