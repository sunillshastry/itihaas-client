import { Link } from 'react-router-dom';
import { FormEvent, useEffect, useState } from 'react';

import SearchSuggestionTab from '@/components/views/SearchSuggestionTab';
import SearchBar from '@/components/elements/SearchBar';
import Logo from '@/components/elements/Logo';

interface FunctionProps {
	onSubmit: (e: FormEvent, value: string) => void;
}

function NavbarHeader({ onSubmit }: FunctionProps) {
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
		<div className="flex w-4xl max-w-full items-center justify-between max-md:flex-col max-md:items-center max-md:justify-start max-md:gap-6">
			<Link
				to="/"
				className="flex items-center justify-center transition-all duration-100 ease-in hover:brightness-150"
			>
				<Logo />
			</Link>
			<div className="relative min-w-sm max-md:px-2 max-sm:min-w-2xs">
				<SearchBar
					value={searchQuery}
					onChange={toggleAutocomplete}
					setSearchQuery={setSearchQuery}
					setIsAutocompleteEnabled={setIsAutocompleteEnabled}
					onSubmit={onSubmit}
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
