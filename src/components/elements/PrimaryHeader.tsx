import PropTypes from 'prop-types';
import { ComponentPropsWithoutRef } from 'react';

interface FunctionProps extends ComponentPropsWithoutRef<'h1'> {
	children: Readonly<React.ReactNode>;
}

function PrimaryHeader({ children }: FunctionProps) {
	return <h1 className="font-heading primary__header text-4xl">{children}</h1>;
}

PrimaryHeader.propTypes = {
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};

export default PrimaryHeader;
