import PropTypes from 'prop-types';

function MainContainer({ children }) {
	return <main className="mx-36 mt-5">{children}</main>;
}

MainContainer.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
};

export default MainContainer;
