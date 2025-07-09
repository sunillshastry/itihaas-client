import { X } from 'lucide-react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface FunctionProps {
	className?: string;
	placeholder: string;
	value: string;
	onChange: (value: string) => void;
	setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

function PageSearchBar({
	className,
	placeholder,
	value,
	onChange,
	setSearchQuery,
}: FunctionProps) {
	const [isCloseDisplayed, setIsCloseDisplayed] = useState<boolean>(false);

	function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
		if (e.target.value.length >= 2) {
			setIsCloseDisplayed(true);
		} else {
			setIsCloseDisplayed(false);
		}

		onChange(e.target.value);
	}

	return (
		<div
			className={twMerge(
				'bg-primary-90 focus-within:outline-primary-20 flex w-lg items-center rounded-sm py-2 pr-1 shadow-md focus-within:outline-3',
				className
			)}
		>
			<input
				type="text"
				className="font-primary text-primary-500 w-full px-4 py-2 text-sm outline-0"
				placeholder={placeholder}
				onChange={handleOnChange}
				value={value}
			/>

			{isCloseDisplayed && (
				<button
					className="text-primary-400 hover:text-primary-600 hover:cursor-pointer"
					onClick={() => {
						setSearchQuery('');
						setIsCloseDisplayed(false);
					}}
				>
					<X size={18} />
				</button>
			)}
		</div>
	);
}

PageSearchBar.propTypes = {
	className: PropTypes.string,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	setSearchQuery: PropTypes.func,
};

export default PageSearchBar;
