import { Link } from 'react-router-dom';
import { SquareArrowOutUpRight } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { ComponentPropsWithoutRef } from 'react';

interface FunctionProps extends ComponentPropsWithoutRef<'a'> {
	native?: boolean;
	to: string;
}

function PageLinkField({
	native = false,
	children,
	className,
	to,
}: FunctionProps) {
	// Shared text wrapping class — forces breaking even in URLs
	const textClasses =
		'flex-1 break-words break-all whitespace-normal overflow-hidden';

	if (native) {
		return (
			<a
				href={to}
				target="_blank"
				className={twMerge(
					'text-primary-400 hover:text-primary-10 flex items-center justify-start underline',
					className
				)}
			>
				<span className={textClasses}>{children}</span>
				<span className="ml-1 flex-shrink-0">
					<SquareArrowOutUpRight size={15} />
				</span>
			</a>
		);
	}

	return (
		<Link
			to={to}
			className={twMerge(
				'text-primary-400 hover:text-primary-10 flex items-center justify-start underline',
				className
			)}
		>
			<span className={textClasses}>{children}</span>
		</Link>
	);
}

export default PageLinkField;
