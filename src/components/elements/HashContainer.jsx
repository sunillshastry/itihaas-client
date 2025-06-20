import PropTypes from 'prop-types';

function HashContainer({ children, id }) {
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
