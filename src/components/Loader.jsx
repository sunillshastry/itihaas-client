import PropTypes from 'prop-types';

function Loader({ size = 'medium' }) {
	const styles = {
		border: '8px solid #b4957e',
		borderTop: '8px solid #4a3423',
		borderRadius: '50%',
		width: '50px',
		height: '50px',
		animation: 'spin 1s linear infinite',
		margin: '0 auto',
	};

	if (size === 'small') {
		styles.border = '5px solid #b4957e';
		styles.borderTop = '5px solid #4a3423';
		styles.width = '25px';
		styles.height = '25px';
	} else if (size === 'medium') {
		styles.border = '8px solid #b4957e';
		styles.borderTop = '8px solid #4a3423';
		styles.width = '50px';
		styles.height = '50px';
	} else if (size === 'large') {
		styles.border = '12px solid #b4957e';
		styles.borderTop = '12px solid #4a3423';
		styles.width = '75px';
		styles.height = '75px';
	}

	return <div style={styles}></div>;
}

Loader.propTypes = {
	size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Loader;
