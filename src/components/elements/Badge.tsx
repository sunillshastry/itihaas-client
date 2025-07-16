import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface FunctionProps extends ComponentPropsWithoutRef<'span'> {
	children: Readonly<React.ReactNode>;
}

function Badge({ children, className }: FunctionProps) {
	return (
		<span
			className={twMerge(
				'from-primary-300 to-primary-500 text-primary-90 ml-1 rounded-full bg-linear-to-b px-[8px] py-[1px] font-mono text-xs uppercase',
				className
			)}
		>
			{children}
		</span>
	);
}

export default Badge;
