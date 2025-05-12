import PropTypes from 'prop-types';

function QuickFactsDescription({ description }) {
	return (
		<p className="text-primary-400 text-md my-5 leading-10">{description}</p>
	);
}

QuickFactsDescription.propTypes = {
	description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
export default QuickFactsDescription;
