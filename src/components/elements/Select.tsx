import { useState, useRef, useEffect, KeyboardEvent, MouseEvent } from 'react';
import { ChevronDown } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { KeyboardNavigationKey } from '@/types/SelectKeyboardNavigationKey';
import { SelectOption } from '@/interfaces/SelectOption';

interface FunctionProps {
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
}: FunctionProps) {
	const [open, setOpen] = useState<boolean>(false);
	const [focusedIndex, setFocusedIndex] = useState<number>(-1);

	const selectRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const optionsRef = useRef<(HTMLDivElement | null)[]>([]);

	// Type-safe option finding
	const selectedOption: SelectOption | undefined = options.find(
		(opt: SelectOption) => opt.value === value
	);

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
			className={twMerge('relative inline-block min-w-40', className)}
		>
			<button
				ref={buttonRef}
				type="button"
				id={buttonId}
				name={name}
				onClick={handleButtonClick}
				onKeyDown={handleKeyDown}
				disabled={disabled}
				className={twMerge(
					'border-primary-100 bg-primary-90 focus:border-primary-200 focus:ring-primary-200 w-full rounded-md border px-3 py-2 text-left shadow-sm transition-colors duration-200 focus:ring-2 focus:outline-none',
					disabled
						? 'cursor-not-allowed bg-gray-100 text-gray-400'
						: 'hover:border-primary-700 cursor-pointer',
					open && 'border-primary-200 ring-primary-200 ring-2'
				)}
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
					className={twMerge(
						'text-primary-700 pointer-events-none absolute top-1/2 right-2 h-4 w-4 -translate-y-1/2 transform transition-transform duration-200',
						open && 'rotate-180'
					)}
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
							className={`px-3 py-2 font-medium transition-colors duration-150 ${option.disabled ? 'cursor-not-allowed bg-gray-50 text-gray-400' : 'cursor-pointer'} ${index === focusedIndex && !option.disabled ? 'bg-primary-300 text-primary-90' : 'text-primary-500'} ${selectedOption?.value === option.value && !option.disabled ? 'bg-primary-40 font-medium' : ''} ${!option.disabled ? 'hover:bg-primary-10' : ''} `}
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

export default Select;
