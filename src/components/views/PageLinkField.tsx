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
	if (native) {
		return (
			<a
				href={to}
				target="_blank"
				className={twMerge(
					'text-primary-400 hover:text-primary-10 flex items-center underline',
					className
				)}
			>
				<span>{children}</span>
				<span className="ml-1">
					<SquareArrowOutUpRight size={15} />
				</span>
			</a>
		);
	}

	return (
		<Link
			to={to}
			className={twMerge(
				'text-primary-400 hover:text-primary-10 underline',
				className
			)}
		>
			{children}
		</Link>
	);
}

export default PageLinkField;
