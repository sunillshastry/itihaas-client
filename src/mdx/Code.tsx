import { twMerge } from 'tailwind-merge';

interface FunctionProps {
	children: Readonly<React.ReactNode>;
	className?: string;
}

function Code({ children, className }: FunctionProps) {
	return (
		<code
			className={twMerge('bg-primary-90 rounded-sm p-1 text-xs', className)}
		>
			{children}
		</code>
	);
}

export default Code;
