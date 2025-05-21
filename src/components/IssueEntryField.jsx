function IssueEntryField({
	label,
	required = false,
	placeholder = '',
	className,
}) {
	return (
		<div
			className={`my-2 flex flex-col items-start justify-start ${className}`}
		>
			<label className="text-primary text-sm font-bold uppercase">
				{label}
				{required && '*'}
			</label>
			<input
				className="bg-primary-90 text-md text-primary-400 focus:outline-primary-20 mt-1 w-2xs rounded-sm px-2 py-2 focus:outline-3"
				type="text"
				placeholder={placeholder}
			/>
		</div>
	);
}

export default IssueEntryField;
