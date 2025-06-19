import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function FooterLink({ to, children }) {
	return (
		<li>
			<Link
				to={to}
				className="text-primary-30 hover:text-primary-60 mt-4 inline-block hover:underline"
			>
				{children}
			</Link>
		</li>
	);
}

FooterLink.propTypes = {
	to: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.node,
		PropTypes.string,
	]),
};

export default FooterLink;
