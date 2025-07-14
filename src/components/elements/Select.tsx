import { useState, useRef, useEffect, KeyboardEvent, MouseEvent } from 'react';
import { ChevronDown } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

// Type definitions
interface SelectOption {
	value: string;
	label: string;
	disabled?: boolean;
}

interface CustomSelectProps {
	options: SelectOption[];
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	disabled?: boolean;
	className?: string;
	'aria-label'?: string;
	'aria-labelledby'?: string;
	id?: string;
	name?: string;
}

type KeyboardNavigationKey =
	| 'ArrowDown'
	| 'ArrowUp'
	| 'Enter'
	| ' '
	| 'Escape'
	| 'Tab';

function Select({
	options,
	value,
	onChange,
	placeholder = 'Select an option',
	disabled = false,
	className = '',
	'aria-label': ariaLabel,
	'aria-labelledby': ariaLabelledby,
	id,
	name,
}: CustomSelectProps) {
	const [open, setOpen] = useState<boolean>(false);
	const [focusedIndex, setFocusedIndex] = useState<number>(-1);

	const selectRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const optionsRef = useRef<(HTMLDivElement | null)[]>([]);

	// Type-safe option finding
	const selectedOption: SelectOption | undefined = options.find(
		(opt: SelectOption) => opt.value === value
	);

	// Available (non-disabled) options
	// const availableOptions: SelectOption[] = options.filter(
	// 	(opt: SelectOption) => !opt.disabled
	// );

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent | Event): void => {
			if (
				selectRef.current &&
				!selectRef.current.contains(event.target as Node)
			) {
				setOpen(false);
				setFocusedIndex(-1);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>): void => {
		if (disabled) return;

		const key = e.key as KeyboardNavigationKey;

		switch (key) {
			case 'ArrowDown':
				e.preventDefault();
				if (!open) {
					setOpen(true);
					setFocusedIndex(0);
				} else {
					setFocusedIndex((prev) => {
						const nextIndex = prev + 1;
						return nextIndex >= options.length ? 0 : nextIndex;
					});
				}
				break;

			case 'ArrowUp':
				e.preventDefault();
				if (!open) {
					setOpen(true);
					setFocusedIndex(options.length - 1);
				} else {
					setFocusedIndex((prev) => {
						const nextIndex = prev - 1;
						return nextIndex < 0 ? options.length - 1 : nextIndex;
					});
				}
				break;

			case 'Enter':
			case ' ':
				e.preventDefault();
				if (!open) {
					setOpen(true);
					setFocusedIndex(selectedOption ? options.indexOf(selectedOption) : 0);
				} else if (focusedIndex >= 0 && focusedIndex < options.length) {
					const option = options[focusedIndex];
					if (!option.disabled) {
						handleOptionSelect(option);
					}
				}
				break;

			case 'Escape':
				e.preventDefault();
				setOpen(false);
				setFocusedIndex(-1);
				buttonRef.current?.focus();
				break;

			case 'Tab':
				setOpen(false);
				setFocusedIndex(-1);
				break;

			default:
				// Type-ahead functionality
				// const char: string = e.key.toLowerCase();
				if (
					e.key.toLowerCase().length === 1 &&
					/[a-z0-9]/.test(e.key.toLowerCase())
				) {
					const matchIndex: number = options.findIndex(
						(opt: SelectOption) =>
							opt.label.toLowerCase().startsWith(e.key.toLowerCase()) &&
							!opt.disabled
					);
					if (matchIndex >= 0) {
						if (!open) {
							setOpen(true);
						}
						setFocusedIndex(matchIndex);
					}
				}
		}
	};

	const handleOptionSelect = (option: SelectOption): void => {
		if (option.disabled) return;

		onChange(option.value);
		setOpen(false);
		setFocusedIndex(-1);
		buttonRef.current?.focus();
	};

	const handleButtonClick = (): void => {
		if (disabled) return;

		setOpen(!open);
		if (!open) {
			const currentIndex = selectedOption ? options.indexOf(selectedOption) : 0;
			setFocusedIndex(currentIndex);
		}
	};

	const handleOptionMouseEnter = (index: number): void => {
		setFocusedIndex(index);
	};

	const handleOptionClick = (option: SelectOption): void => {
		handleOptionSelect(option);
	};

	useEffect(() => {
		if (open && focusedIndex >= 0 && optionsRef.current[focusedIndex]) {
			optionsRef.current[focusedIndex]?.scrollIntoView({
				block: 'nearest',
				behavior: 'smooth',
			});
		}
	}, [focusedIndex, open]);

	// Generate unique IDs for accessibility
	const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
	const listboxId = `${selectId}-listbox`;
	const buttonId = `${selectId}-button`;

	return (
		<div
			ref={selectRef}
			className={`relative inline-block min-w-40 ${className}`}
		>
			<button
				ref={buttonRef}
				type="button"
				id={buttonId}
				name={name}
				onClick={handleButtonClick}
				onKeyDown={handleKeyDown}
				disabled={disabled}
				className={`border-primary-100 bg-primary-90 focus:border-primary-200 focus:ring-primary-200 w-full rounded-md border px-3 py-2 text-left shadow-sm transition-colors duration-200 focus:ring-2 focus:outline-none ${disabled ? 'cursor-not-allowed bg-gray-100 text-gray-400' : 'hover:border-primary-700 cursor-pointer'} ${open ? 'border-primary-200 ring-primary-200 ring-2' : ''} `}
				aria-haspopup="listbox"
				aria-expanded={open}
				aria-labelledby={ariaLabelledby}
				aria-label={ariaLabel}
				aria-controls={open ? listboxId : undefined}
				aria-activedescendant={
					open && focusedIndex >= 0
						? `${selectId}-option-${focusedIndex}`
						: undefined
				}
			>
				<span
					className={twMerge(
						'block truncate font-medium',
						selectedOption?.label ? 'text-primary-200' : 'text-primary-40'
					)}
				>
					{selectedOption ? selectedOption.label : placeholder}
				</span>
				<ChevronDown
					className={`text-primary-700 pointer-events-none absolute top-1/2 right-2 h-4 w-4 -translate-y-1/2 transform transition-transform duration-200 ${open ? 'rotate-180' : ''} `}
					aria-hidden="true"
				/>
			</button>

			{open && (
				<div
					id={listboxId}
					className="border-primary-70 bg-primary-90 absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border shadow-lg"
					role="listbox"
					aria-labelledby={ariaLabelledby || buttonId}
					aria-multiselectable="false"
				>
					{options.map((option: SelectOption, index: number) => (
						<div
							key={option.value}
							id={`${selectId}-option-${index}`}
							ref={(el) => {
								optionsRef.current[index] = el;
							}}
							onClick={() => handleOptionClick(option)}
							onMouseEnter={() => handleOptionMouseEnter(index)}
							className={`px-3 py-2 font-medium transition-colors duration-150 ${option.disabled ? 'cursor-not-allowed bg-gray-50 text-gray-400' : 'cursor-pointer'} ${index === focusedIndex && !option.disabled ? 'bg-primary-300 text-primary-90' : 'text-red-900'} ${selectedOption?.value === option.value && !option.disabled ? 'bg-blue-50 font-medium' : ''} ${!option.disabled ? 'hover:bg-primary-10' : ''} `}
							role="option"
							aria-selected={selectedOption?.value === option.value}
							aria-disabled={option.disabled}
						>
							{option.label}
						</div>
					))}
				</div>
			)}
		</div>
	);
}

// Demo component with TypeScript
// const SelectDemo: React.FC = () => {
// 	const [selectedValue, setSelectedValue] = useState<string>('');
// 	const [selectedValue2, setSelectedValue2] = useState<string>('medium');

// 	const options: SelectOption[] = [
// 		{ value: 'apple', label: 'Apple' },
// 		{ value: 'banana', label: 'Banana' },
// 		{ value: 'orange', label: 'Orange' },
// 		{ value: 'grape', label: 'Grape', disabled: true },
// 		{ value: 'strawberry', label: 'Strawberry' },
// 		{ value: 'mango', label: 'Mango' },
// 		{ value: 'pineapple', label: 'Pineapple' },
// 	];

// 	const sizeOptions: SelectOption[] = [
// 		{ value: 'small', label: 'Small' },
// 		{ value: 'medium', label: 'Medium' },
// 		{ value: 'large', label: 'Large' },
// 		{ value: 'extra-large', label: 'Extra Large' },
// 	];

// 	const handleFruitChange = (value: string): void => {
// 		setSelectedValue(value);
// 	};

// 	const handleSizeChange = (value: string): void => {
// 		setSelectedValue2(value);
// 	};

// 	const handleDisabledChange = (value: string): void => {
// 		// This won't be called due to disabled state
// 		console.log('Disabled select changed:', value);
// 	};

// 	return (
// 		<div className="mx-auto max-w-md space-y-6 p-6">
// 			<div>
// 				<h1 className="mb-6 text-2xl font-bold text-gray-900">
// 					TypeScript Custom Select Dropdown
// 				</h1>

// 				<div className="space-y-4">
// 					<div>
// 						<label
// 							id="fruit-label"
// 							className="mb-2 block text-sm font-medium text-gray-700"
// 						>
// 							Choose a fruit:
// 						</label>
// 						<Select
// 							options={options}
// 							value={selectedValue}
// 							onChange={handleFruitChange}
// 							placeholder="Select a fruit..."
// 							aria-labelledby="fruit-label"
// 							name="fruit"
// 						/>
// 						{selectedValue && (
// 							<p className="mt-2 text-sm text-gray-600">
// 								Selected:{' '}
// 								{
// 									options.find(
// 										(opt: SelectOption) => opt.value === selectedValue
// 									)?.label
// 								}
// 							</p>
// 						)}
// 					</div>

// 					<div>
// 						<label
// 							id="size-label"
// 							className="mb-2 block text-sm font-medium text-gray-700"
// 						>
// 							Choose a size:
// 						</label>
// 						<Select
// 							options={sizeOptions}
// 							value={selectedValue2}
// 							onChange={handleSizeChange}
// 							placeholder="Select a size..."
// 							aria-labelledby="size-label"
// 							name="size"
// 						/>
// 					</div>

// 					<div>
// 						<label
// 							id="disabled-label"
// 							className="mb-2 block text-sm font-medium text-gray-700"
// 						>
// 							Disabled select:
// 						</label>
// 						<Select
// 							options={options}
// 							value=""
// 							onChange={handleDisabledChange}
// 							placeholder="This is disabled"
// 							disabled={true}
// 							aria-labelledby="disabled-label"
// 							name="disabled"
// 						/>
// 					</div>
// 				</div>

// 				<div className="mt-8 rounded-lg bg-gray-50 p-4">
// 					<h3 className="mb-2 text-sm font-medium text-gray-800">
// 						TypeScript Features:
// 					</h3>
// 					<ul className="space-y-1 text-xs text-gray-600">
// 						<li>• Strict type checking for all props and state</li>
// 						<li>• SelectOption interface with optional disabled property</li>
// 						<li>• Type-safe event handlers and callbacks</li>
// 						<li>• Proper TypeScript React.FC components</li>
// 						<li>• Full IntelliSense support</li>
// 						<li>• Runtime type safety</li>
// 					</ul>

// 					<h3 className="mt-4 mb-2 text-sm font-medium text-gray-800">
// 						Accessibility Features:
// 					</h3>
// 					<ul className="space-y-1 text-xs text-gray-600">
// 						<li>• Arrow keys for navigation</li>
// 						<li>• Enter/Space to select</li>
// 						<li>• Escape to close</li>
// 						<li>• Type-ahead search</li>
// 						<li>• Screen reader support</li>
// 						<li>• Focus management</li>
// 						<li>• ARIA attributes</li>
// 						<li>• Disabled option support</li>
// 					</ul>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

export default Select;
