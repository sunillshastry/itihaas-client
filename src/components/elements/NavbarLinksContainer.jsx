import NavbarLink from '@/components/views/NavbarLink';

function NavbarLinksContainer() {
	return (
		<ul className="border-primary text-md mt-15 flex min-w-6xl items-center justify-evenly border-b-2 pb-6">
			<li>
				<NavbarLink to="/dynasties">Dynasties</NavbarLink>
			</li>
			<li>
				<NavbarLink to="/rulers">Rulers</NavbarLink>
			</li>
			<li>
				<NavbarLink to="/wars">Wars</NavbarLink>
			</li>
			<li>
				<NavbarLink to="/docs">Docs</NavbarLink>
			</li>
			<li>
				<NavbarLink to="/issues">Issues</NavbarLink>
			</li>
		</ul>
	);
}

export default NavbarLinksContainer;
