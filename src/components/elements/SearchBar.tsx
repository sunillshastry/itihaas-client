import { X } from 'lucide-react';
import PropTypes from 'prop-types';
import { useState } from 'react';

interface FunctionProps {
	value: string;
	onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
	setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
	setIsAutocompleteEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

function SearchBar({
	value,
	onChange,
	setSearchQuery,
	setIsAutocompleteEnabled,
}: FunctionProps) {
	const [isCloseDisplayed, setIsCloseDisplayed] = useState(false);

	function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
		if (e.target.value.length >= 3) {
			setIsCloseDisplayed(true);
		} else {
			setIsCloseDisplayed(false);
		}
		onChange(e);
	}

	return (
		<div className="bg-primary-90 focus-within:outline-primary-20 flex items-center rounded-sm pr-1 shadow-md focus-within:outline-3">
			<input
				className="font-primary text-primary-500 w-sm px-4 py-2 text-sm outline-0"
				type="text"
				placeholder="Search for dynasties, rulers..."
				value={value}
				onChange={(e) => handleOnChange(e)}
			/>

			<button
				className={`text-primary-400 hover:text-primary-600 hover:cursor-pointer ${isCloseDisplayed ? 'inline-block' : 'hidden'}`}
				onClick={() => {
					setSearchQuery('');
					setIsAutocompleteEnabled(false);
					setIsCloseDisplayed(false);
				}}
			>
				<X size={18} />
			</button>
		</div>
	);
}

SearchBar.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func,
	setSearchQuery: PropTypes.func,
	setIsAutocompleteEnabled: PropTypes.func,
};

export default SearchBar;
