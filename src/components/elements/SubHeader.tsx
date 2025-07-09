import PropTypes from 'prop-types';
import { ComponentPropsWithoutRef } from 'react';

interface FunctionProps extends ComponentPropsWithoutRef<'h2'> {
	children: Readonly<React.ReactNode>;
}

function SubHeader({ children }: FunctionProps) {
	return (
		<h2 className="font-heading text-primary-400 text-2xl underline underline-offset-4">
			{children}
		</h2>
	);
}

SubHeader.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.element,
		PropTypes.string,
	]),
};

export default SubHeader;
