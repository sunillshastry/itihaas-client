import { Link } from 'react-router-dom';
import SearchAutocompleteTab from './SearchAutocompleteTab';
import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';

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
			<Link to="/">
				<h1 className="font-logo text-3xl">Itihaas</h1>
			</Link>
			<div className="relative">
				<SearchBar
					value={searchQuery}
					onChange={toggleAutocomplete}
					setSearchQuery={setSearchQuery}
					setIsAutocompleteEnabled={setIsAutocompleteEnabled}
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
