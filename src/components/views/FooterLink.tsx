import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

interface FunctionProps {
	to: string;
	children: Readonly<React.ReactNode>;
}

function FooterLink({ to, children }: FunctionProps) {
	return (
		<li>
			<Link
				to={to}
				className="text-primary-30 hover:text-primary-60 mt-4 inline-block text-sm hover:underline max-lg:mt-2"
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
