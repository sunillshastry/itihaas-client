import PropTypes from 'prop-types';

function MainContainer({ children, className }) {
	return <main className={`mx-36 mt-5 ${className}`}>{children}</main>;
}

MainContainer.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
	className: PropTypes.string,
};

export default MainContainer;
