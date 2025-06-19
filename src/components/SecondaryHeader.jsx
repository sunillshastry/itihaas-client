import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

function SecondaryHeader({ children, className }) {
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
