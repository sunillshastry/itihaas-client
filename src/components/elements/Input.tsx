import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

function Input({
	placeholder,
	className,
	type = 'text',
	...defaultProps
}: ComponentPropsWithoutRef<'input'>) {
	return (
		<input
			type={type}
			autoComplete="off"
			placeholder={placeholder}
			className={twMerge(
				'bg-primary-90 focus:outline-primary text-primary-500 w-xs rounded-sm px-3 py-1 font-medium focus:outline-3 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
				className
			)}
			{...defaultProps}
		/>
	);
}

export default Input;
