import PropTypes from 'prop-types';

function Description({ description }) {
	return (
		<p className="text-primary-400 my-5 text-base leading-10">{description}</p>
	);
}

Description.propTypes = {
	description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
export default Description;
