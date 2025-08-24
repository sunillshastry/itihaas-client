import useFormattedNumber from '@/hooks/useFormattedNumber';
import { twMerge } from 'tailwind-merge';

interface FunctionProps {
	children: Readonly<React.ReactNode>;
	field: number;
	fieldName: string;
	className?: string;
}

function SearchResultInfoPiece({
	children,
	field,
	fieldName,
	className,
}: FunctionProps) {
	const formattedFieldName = field === 1 ? fieldName : `${fieldName}s`;

	return (
		<div
			className={twMerge(
				'l-2 flex items-center justify-start gap-1',
				className
			)}
		>
			<span>{children}</span>
			<span className="font-medium">
				{useFormattedNumber(field)} {formattedFieldName}
			</span>
		</div>
	);
}

export default SearchResultInfoPiece;
