import { NavLink } from 'react-router-dom';
import SearchAutocompleteTab from './SearchAutocompleteTab';
import { useEffect, useState } from 'react';

function NavbarHeader() {
	const [isAutocompleteEnabled, setIsAutocompleteEnabled] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');

	function toggleAutocomplete(e) {
		const status = e.target.value;
		setSearchQuery(status);

		if (status.length >= 3) {
			setIsAutocompleteEnabled(true);
		} else {
			setIsAutocompleteEnabled(false);
		}
	}

	useEffect(function () {
		function handleEscapeAutocomplete(e) {
			if (e.key === 'Escape' || e.code === 'Escape') {
				setIsAutocompleteEnabled(false);
			}
		}

		window.addEventListener('keydown', handleEscapeAutocomplete);

		return () => {
			document.removeEventListener('keydown', handleEscapeAutocomplete);
		};
	}, []);

	function handleLinkClick() {
		setIsAutocompleteEnabled(false);
	}

	return (
		<div className="flex min-w-4xl items-center justify-between">
			<NavLink to="/">
				<h1 className="font-logo text-3xl">Itihaas</h1>
			</NavLink>
			<div className="relative">
				<input
					className="bg-primary-90 font-primary w-sm rounded-sm px-4 py-2 text-sm shadow-md"
					type="text"
					placeholder="Search for dynasties, rulers..."
					value={searchQuery}
					onChange={toggleAutocomplete}
				/>
				<SearchAutocompleteTab
					displayed={isAutocompleteEnabled}
					query={searchQuery}
					handleLinkClick={handleLinkClick}
				/>
			</div>
		</div>
	);
}

export default NavbarHeader;
