import { FileWarning } from 'lucide-react';
import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface FunctionProps extends ComponentPropsWithoutRef<'p'> {
	children?: Readonly<React.ReactNode> | string;
}

function FormError({
	children = 'Error!',
	className,
	...defaultProps
}: FunctionProps) {
	return (
		<p
			className={twMerge(
				'text-primary-600 flex items-center gap-1 text-sm font-medium',
				className
			)}
			{...defaultProps}
		>
			<span>
				<FileWarning size={15} />
			</span>
			<span>{children}</span>
		</p>
	);
}

export default FormError;
