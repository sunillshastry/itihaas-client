import NavbarHeader from '@/components/views/NavbarHeader';
import NavbarLinksContainer from '@/components/elements/NavbarLinksContainer';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
	const navigate = useNavigate();

	function handleSearchFormSubmit(e: FormEvent, value: string): void {
		e.preventDefault();

		if (value.length >= 3) {
			navigate(`/search?q=${value}`);
		}
	}

	return (
		<nav className="flex flex-col items-center justify-center pt-10 pb-5">
			<NavbarHeader onSubmit={handleSearchFormSubmit} />
			<NavbarLinksContainer />
		</nav>
	);
}

export default Navbar;
