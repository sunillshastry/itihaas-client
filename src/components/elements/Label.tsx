import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface FunctionProps extends ComponentPropsWithoutRef<'label'> {
	children: Readonly<React.ReactNode>;
	required?: boolean;
}

function Label({
	children,
	className,
	required = false,
	...defaultProps
}: FunctionProps) {
	return (
		<label
			className={twMerge(
				'text-primary-100 text-sm font-bold uppercase',
				className
			)}
			{...defaultProps}
		>
			{children}
			{required && '*'}
		</label>
	);
}

export default Label;
