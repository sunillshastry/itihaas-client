import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

function MainContainer({ children, className }) {
	return <main className={twMerge('mx-36 mt-5', className)}>{children}</main>;
}

MainContainer.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
	className: PropTypes.string,
};

export default MainContainer;
