import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

interface FunctionProps {
	label: string;
	required?: boolean;
	placeholder?: string;
	className?: string;
	variant?: 'small' | 'large';
	textarea?: boolean;
}

function IssueEntryField({
	label,
	required = false,
	placeholder = '',
	className,
	variant = 'small',
	textarea = false,
}: FunctionProps) {
	return (
		<div
			className={twMerge(
				'my-2 flex flex-col items-start justify-start',
				className
			)}
		>
			<label className="text-primary text-sm font-bold uppercase">
				{label}
				{required && '*'}
			</label>
			{textarea ? (
				<textarea
					rows={5}
					cols={60}
					className="bg-primary-80 text-primary-400 focus:outline-primary-20 mt-1 rounded-sm px-2 py-2 text-base font-medium focus:outline-3"
				></textarea>
			) : (
				<input
					className={twMerge(
						'bg-primary-80 text-primary-400 focus:outline-primary-20 mt-1 rounded-sm px-2 py-2 text-base font-medium focus:outline-3',
						variant === 'small' ? 'w-2xs' : 'w-sm'
					)}
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
