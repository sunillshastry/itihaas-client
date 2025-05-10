import PropTypes from 'prop-types';

function Loader({ size = 'medium' }) {
	const styles = {
		border:
			(size === 'small' && '5px solid #b4957e') ||
			(size === 'medium' && '8px solid #b4957e') ||
			(size === 'large' && '12px solid #b4957e'),

		borderTop:
			(size === 'small' && '5px solid #4a3423') ||
			(size === 'medium' && '8px solid #4a3423') ||
			(size === 'large' && '12px solid #4a3423'),

		borderRadius: '50%',
		width:
			(size === 'small' && '25px') ||
			(size === 'medium' && '50px') ||
			(size === 'large' && '75px'),
		height:
			(size === 'small' && '25px') ||
			(size === 'medium' && '50px') ||
			(size === 'large' && '75px'),
		animation: 'spin 1s linear infinite',
		margin: '0 auto',
	};

	return <div style={styles}></div>;
}

Loader.propTypes = {
	size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Loader;
