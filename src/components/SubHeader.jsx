import PropTypes from 'prop-types';

function SubHeader({ children }) {
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
