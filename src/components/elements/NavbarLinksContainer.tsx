import NavbarLink from '@/components/views/NavbarLink';

function NavbarLinksContainer() {
	return (
		<ul className="border-primary mt-15 flex w-6xl max-w-full items-center justify-evenly border-b-2 pb-6 text-base">
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
				<NavbarLink to="/issues">Contributions</NavbarLink>
			</li>
		</ul>
	);
}

export default NavbarLinksContainer;
