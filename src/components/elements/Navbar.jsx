import NavbarHeader from '@/components/views/NavbarHeader';
import NavbarLinksContainer from '@/components/elements/NavbarLinksContainer';

function Navbar() {
	return (
		<nav className="flex flex-col items-center justify-center pt-10 pb-5">
			<NavbarHeader />
			<NavbarLinksContainer />
		</nav>
	);
}

export default Navbar;
