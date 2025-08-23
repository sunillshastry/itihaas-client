import { Binoculars, Search, X } from 'lucide-react';
import PropTypes from 'prop-types';
import { FormEvent, useEffect, useRef, useState } from 'react';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import { twMerge } from 'tailwind-merge';
import { Kbd, KbdKey } from '../ui/shadcn-io/kbd';

interface FunctionProps {
	value: string;
	onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
	setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
	setIsAutocompleteEnabled: React.Dispatch<React.SetStateAction<boolean>>;
	onSubmit: (e: FormEvent, value: string) => void;
}

function SearchBar({
	value,
	onChange,
	setSearchQuery,
	setIsAutocompleteEnabled,
	onSubmit,
}: FunctionProps) {
	const [isCloseDisplayed, setIsCloseDisplayed] = useState<boolean>(false);

	function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
		if (e.target.value.length >= 3) {
			setIsCloseDisplayed(true);
		} else {
			setIsCloseDisplayed(false);
		}
		onChange(e);
	}

	const searchBarInputRef = useRef<HTMLInputElement>(null);
	const formRef = useRef<HTMLFormElement>(null);

	// Effect to focus SearchBar (CMD + K)
	useEffect(function () {
		function focusOnKeyPress(e: KeyboardEvent) {
			if (e.metaKey && e.key.toLowerCase() === 'k') {
				formRef?.current?.focus();
				searchBarInputRef?.current?.focus();
			}
		}

		window.addEventListener('keydown', focusOnKeyPress);

		return () => window.removeEventListener('keydown', focusOnKeyPress);
	}, []);

	// Effect to blur SearchBar (Escape)
	useEffect(function () {
		function blurOnEscape(e: KeyboardEvent) {
			if (e.key.toLowerCase() === 'escape') {
				formRef?.current?.blur();
				searchBarInputRef?.current?.blur();
			}
		}

		window.addEventListener('keyup', blurOnEscape);

		return () => window.removeEventListener('keyup', blurOnEscape);
	}, []);

	return (
		<form
			className="bg-primary-90 focus-within:outline-primary-20 relative flex items-center rounded-sm pr-1 shadow-md focus-within:outline-3"
			onSubmit={(e) => onSubmit(e, value)}
			ref={formRef}
			tabIndex={-1}
		>
			<input
				className="font-primary text-primary-500 w-full px-4 py-2 text-sm outline-0"
				type="text"
				placeholder="Search for dynasties, rulers..."
				value={value}
				onChange={(e) => handleOnChange(e)}
				ref={searchBarInputRef}
			/>

			{value.length === 0 && (
				<div className="absolute right-2 flex items-center justify-start max-md:hidden">
					<Kbd className="bg-primary-80 text-primary-600">
						<KbdKey aria-label="Meta">⌘</KbdKey>
						<KbdKey aria-label="K">K</KbdKey>
					</Kbd>
				</div>
			)}

			<button
				className={twMerge(
					`text-primary-400 hover:text-primary-600 hover:cursor-pointer`,
					isCloseDisplayed ? 'inline-block' : 'hidden'
				)}
				onClick={() => {
					setSearchQuery('');
					setIsAutocompleteEnabled(false);
					setIsCloseDisplayed(false);
				}}
				type="button"
			>
				<X size={18} />
			</button>

			<Tooltip id="search-button-icon">
				<div className="flex items-center gap-1">
					<span className="text-xs font-medium uppercase">
						Find more results
					</span>
					<span>
						<Binoculars size={14} />
					</span>
				</div>
			</Tooltip>
			<button
				className={twMerge(
					'bg-primary-200 hover:bg-primary-500 text-primary-60 ml-1 rounded-lg px-1.5 py-1 transition ease-in hover:cursor-pointer',
					isCloseDisplayed ? 'inline-block' : 'hidden'
				)}
				type="submit"
				data-tooltip-id="search-button-icon"
				data-tooltip-place="top-start"
			>
				<Search size={18} />
			</button>
		</form>
	);
}

SearchBar.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func,
	setSearchQuery: PropTypes.func,
	setIsAutocompleteEnabled: PropTypes.func,
};

export default SearchBar;
