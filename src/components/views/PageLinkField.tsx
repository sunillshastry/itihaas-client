import { Link } from 'react-router-dom';
import { SquareArrowOutUpRight } from 'lucide-react';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

function PageLinkField({ native = false, children, className, to }) {
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

PageLinkField.propTypes = {
	native: PropTypes.boolean,
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.node,
		PropTypes.string,
	]),
	className: PropTypes.string,
	to: PropTypes.string.isRequired,
};

export default PageLinkField;
