import PropTypes from 'prop-types';
import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface FunctionProps extends ComponentPropsWithoutRef<'h1'> {
	children: Readonly<React.ReactNode>;
}

function PrimaryHeader({ children, className }: FunctionProps) {
	return (
		<h1 className={twMerge('font-heading primary__header text-4xl', className)}>
			{children}
		</h1>
	);
}

PrimaryHeader.propTypes = {
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};

export default PrimaryHeader;
