import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

function TextArea({
	rows = 5,
	cols = 45,
	className,
	...defaultProps
}: ComponentPropsWithoutRef<'textarea'>) {
	return (
		<textarea
			className={twMerge(
				'bg-primary-90 focus:outline-primary text-primary-500 w-xs rounded-sm px-3 py-1 font-medium focus:outline-3',
				className
			)}
			rows={rows}
			cols={cols}
			{...defaultProps}
		></textarea>
	);
}

export default TextArea;
