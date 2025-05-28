import PropTypes from 'prop-types';

function IssueEntryField({
	label,
	required = false,
	placeholder = '',
	className,
	variant = 'small',
	textarea = false,
}) {
	return (
		<div
			className={`my-2 flex flex-col items-start justify-start ${className}`}
		>
			<label className="text-primary text-sm font-bold uppercase">
				{label}
				{required && '*'}
			</label>
			{textarea ? (
				<textarea
					rows="5"
					cols="60"
					className="bg-primary-80 text-md text-primary-400 focus:outline-primary-20 mt-1 rounded-sm px-2 py-2 font-medium focus:outline-3"
				></textarea>
			) : (
				<input
					className={`bg-primary-80 text-md text-primary-400 focus:outline-primary-20 mt-1 rounded-sm px-2 py-2 font-medium focus:outline-3 ${variant === 'small' ? 'w-2xs' : 'w-sm'}`}
					type="text"
					placeholder={placeholder}
				/>
			)}
		</div>
	);
}

IssueEntryField.propTypes = {
	label: PropTypes.string.isRequired,
	required: PropTypes.string,
	placeholder: PropTypes.string,
	className: PropTypes.string,
	variant: PropTypes.string,
	textarea: PropTypes.bool,
};

export default IssueEntryField;
