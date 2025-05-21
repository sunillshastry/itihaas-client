import PropTypes from 'prop-types';

function IssueInfoListItem({ icon, bolded, content }) {
	return (
		<li className="my-6 flex items-center">
			<span>{icon}</span>
			<span className="ml-2 font-medium">{bolded}&nbsp;</span>
			<span>{content}</span>
		</li>
	);
}

IssueInfoListItem.propTypes = {
	icon: PropTypes.elementType,
	bolded: PropTypes.string,
	content: PropTypes.string,
};

export default IssueInfoListItem;
