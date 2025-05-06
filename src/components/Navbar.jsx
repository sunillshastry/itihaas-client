import { NavLink } from 'react-router-dom';

function Navbar() {
	return (
		<nav className="flex flex-col items-center justify-center pt-10 pb-5">
			<div className="flex min-w-4xl items-center justify-between">
				<NavLink to="/">
					<h1 className="font-logo text-3xl">Itihaas</h1>
				</NavLink>
				<div>
					<input
						className="bg-primary-90 font-primary w-sm rounded-sm px-4 py-2 shadow-md"
						type="text"
						placeholder="Search for dynasties, rulers..."
					/>
				</div>
			</div>

			<ul className="border-primary mt-15 flex min-w-4xl items-center justify-evenly border-b-2 pb-6">
				<li>
					<NavLink
						className="nav__link"
						to="/dynasties"
					>
						Dynasties
					</NavLink>
				</li>
				<li>
					<NavLink
						className="nav__link"
						to="/rulers"
					>
						Rulers
					</NavLink>
				</li>
				<li>
					<NavLink
						className="nav__link"
						to="/wars"
					>
						Wars
					</NavLink>
				</li>
				<li>
					<NavLink
						className="nav__link"
						to="/docs"
					>
						API
					</NavLink>
				</li>
				<li>
					<NavLink
						className="nav__link"
						to="/issues"
					>
						Issues
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
