import PropTypes from 'prop-types';
import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface FunctionProps extends ComponentPropsWithoutRef<'h3'> {
	children: Readonly<React.ReactNode>;
}
function SecondaryHeader({ children, className }: FunctionProps) {
	return (
		<h3 className={twMerge('text-primary-200 font-heading text-lg', className)}>
			{children}
		</h3>
	);
}

SecondaryHeader.propTypes = {
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
	className: PropTypes.string,
};
export default SecondaryHeader;
