import PropTypes from 'prop-types';

function FooterLinksTab({ title, children }) {
	return (
		<div>
			<h4 className="font-heading text-primary-60 border-b-primary-60/20 border-b text-xl">
				{title}
			</h4>
			{children}
		</div>
	);
}

FooterLinksTab.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.node,
		PropTypes.string,
	]),
};

export default FooterLinksTab;
