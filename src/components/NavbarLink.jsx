import { NavLink } from 'react-router-dom';

function NavbarLink({ to, children }) {
	return (
		<NavLink
			className="nav__link"
			to={to}
		>
			{children}
		</NavLink>
	);
}

export default NavbarLink;
