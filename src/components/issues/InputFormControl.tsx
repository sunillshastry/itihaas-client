import { Info } from 'lucide-react';
import Input from '../elements/Input';
import { Tooltip } from 'react-tooltip';

interface FunctionProps {
	required?: boolean;
	placeholder?: string;
	id?: string;
	info?: string;

	label: string;
}

export default function InputFormControl({
	required = false,
	label,
	id,
	info,
	placeholder = '',
}: FunctionProps) {
	const tooltipId = `${label}-${id}`;

	return (
		<div className="my-3 flex flex-col items-start justify-start">
			{info && (
				<Tooltip id={tooltipId}>
					<p className="text-sm font-medium">{info}</p>
				</Tooltip>
			)}
			<label
				className="flex items-center justify-start gap-x-1 text-sm font-semibold"
				htmlFor={id}
			>
				<span>{required ? `${label}*` : label}</span>
				{info && (
					<span
						data-tooltip-id={info && tooltipId}
						data-tooltip-place="top"
					>
						<Info size={14} />
					</span>
				)}
			</label>
			<Input
				placeholder={placeholder}
				className="mt-0.5 w-lg py-2 placeholder:text-sm max-md:w-full"
				id={id}
				required={required}
			/>
		</div>
	);
}
