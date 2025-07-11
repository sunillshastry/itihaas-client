import PropTypes from 'prop-types';

interface FunctionProps {
	title: string;
	content: string | React.ReactNode;
}

function QuickFactField({ title, content }: FunctionProps) {
	return (
		<li>
			<h3 className="text-primary-70 text-sm font-semibold uppercase underline underline-offset-2">
				{title}
			</h3>
			<p
				className={`text-primary-90 ${typeof content === 'string' && content.length > 60 ? 'text-sm' : 'text-base'} mt-1 font-semibold`}
			>
				{content}
			</p>
		</li>
	);
}

QuickFactField.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
};

export default QuickFactField;
