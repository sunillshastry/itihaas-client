import { NavLink } from 'react-router-dom';

function NavbarHeader() {
	return (
		<div className="flex min-w-4xl items-center justify-between">
			<NavLink to="/">
				<h1 className="font-logo text-3xl">Itihaas</h1>
			</NavLink>
			<div>
				<input
					className="bg-primary-90 font-primary w-sm rounded-sm px-4 py-2 text-sm shadow-md"
					type="text"
					placeholder="Search for dynasties, rulers..."
				/>
			</div>
		</div>
	);
}

export default NavbarHeader;
