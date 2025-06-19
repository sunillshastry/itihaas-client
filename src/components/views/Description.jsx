import PropTypes from 'prop-types';

function Description({ description }) {
	return (
		<p className="text-primary-400 text-md my-5 leading-10">{description}</p>
	);
}

Description.propTypes = {
	description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
export default Description;
