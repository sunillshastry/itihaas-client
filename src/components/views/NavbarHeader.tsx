import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import SearchSuggestionTab from '@/components/views/SearchSuggestionTab';
import SearchBar from '@/components/elements/SearchBar';
import Logo from '@/components/elements/Logo';

function NavbarHeader() {
	const [isAutocompleteEnabled, setIsAutocompleteEnabled] =
		useState<boolean>(false);
	const [searchQuery, setSearchQuery] = useState<string>('');

	function toggleAutocomplete(e: React.ChangeEvent<HTMLInputElement>) {
		const status = e.target.value;
		setSearchQuery(status);

		// Check if the number of characters in search is at least 3 characters long
		if (status.length >= 3) {
			setIsAutocompleteEnabled(true);
		} else {
			setIsAutocompleteEnabled(false);
		}
	}

	// Custom useEffect to handle 'Escape' key event to remove suggestions from display
	useEffect(function () {
		function handleEscapeAutocomplete(e: KeyboardEvent) {
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
			<Link
				to="/"
				className="flex items-center justify-center transition-all duration-100 ease-in hover:brightness-150"
			>
				<Logo />
			</Link>
			<div className="relative">
				<SearchBar
					value={searchQuery}
					onChange={toggleAutocomplete}
					setSearchQuery={setSearchQuery}
					setIsAutocompleteEnabled={setIsAutocompleteEnabled}
				/>
				<SearchSuggestionTab
					displayed={isAutocompleteEnabled}
					query={searchQuery}
					handleLinkClick={handleLinkClick}
				/>
			</div>
		</div>
	);
}

export default NavbarHeader;
