import NavbarHeader from '@/components/NavbarHeader';
import NavbarLinksContainer from '@/components/NavbarLinksContainer';

function Navbar() {
	return (
		<nav className="flex flex-col items-center justify-center pt-10 pb-5">
			<NavbarHeader />
			<NavbarLinksContainer />
		</nav>
	);
}

export default Navbar;
