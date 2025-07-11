import { ComponentPropsWithoutRef } from 'react';

interface FunctionProps extends ComponentPropsWithoutRef<'span'> {
	children: Readonly<React.ReactNode>;
}

function Badge({ children }: FunctionProps) {
	return (
		<span className="from-primary-300 to-primary-500 text-primary-90 ml-1 rounded-full bg-linear-to-b px-[8px] py-[1px] font-mono text-xs uppercase">
			{children}
		</span>
	);
}

export default Badge;
