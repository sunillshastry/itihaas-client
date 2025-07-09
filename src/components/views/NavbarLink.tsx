import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

interface FunctionProps {
	to: string;
	children: Readonly<React.ReactNode>;
}

function NavbarLink({ to, children }: FunctionProps) {
	return (
		<NavLink
			className="text-primary-500 hover:text-primary-10 hover:underline"
			to={to}
		>
			{children}
		</NavLink>
	);
}

NavbarLink.propTypes = {
	to: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};

export default NavbarLink;
