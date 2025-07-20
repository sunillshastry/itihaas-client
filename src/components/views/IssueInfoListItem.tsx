import PropTypes from 'prop-types';

interface FunctionProps {
	icon: React.ReactNode;
	bolded: string;
	content: string;
}
function IssueInfoListItem({ icon, bolded, content }: FunctionProps) {
	return (
		<li className="my-6 flex items-center max-xl:flex-col max-xl:items-start max-xl:justify-start">
			<div className="flex">
				<span>{icon}</span>
				<span className="ml-2 font-medium">{bolded}&nbsp;</span>
			</div>
			<span className="max-xl:mt-2">{content}</span>
		</li>
	);
}

IssueInfoListItem.propTypes = {
	icon: PropTypes.elementType,
	bolded: PropTypes.string,
	content: PropTypes.string,
};

export default IssueInfoListItem;
