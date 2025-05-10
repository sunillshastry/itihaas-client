import PropTypes from 'prop-types';

function PrimaryHeader({ children }) {
	return <h1 className="font-heading primary__header text-4xl">{children}</h1>;
}

PrimaryHeader.propTypes = {
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};

export default PrimaryHeader;
