import PropTypes from 'prop-types';
import { ComponentPropsWithoutRef } from 'react';

interface FunctionProps extends ComponentPropsWithoutRef<'p'> {
	description: string;
}

function Description({ description }: FunctionProps) {
	return (
		<p className="text-primary-400 my-5 text-base leading-10">{description}</p>
	);
}

Description.propTypes = {
	description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
export default Description;
