import PropTypes from 'prop-types';
import { ComponentPropsWithoutRef } from 'react';

interface FunctionProps extends ComponentPropsWithoutRef<'div'> {
	children: Readonly<React.ReactNode>;
}

function HashContainer({ children, id }: FunctionProps) {
	return <div id={id}>{children}</div>;
}

HashContainer.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element,
		PropTypes.node,
	]),
	id: PropTypes.string.isRequired,
};

export default HashContainer;
