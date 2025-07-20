import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

interface FunctionProps {
	title: string;
	children: Readonly<React.ReactNode>;
	className?: string;
}

function FooterLinksTab({ title, children, className }: FunctionProps) {
	return (
		<div className={twMerge('max-lg:w-full', className)}>
			<h4 className="font-heading text-primary-60 border-b-primary-60/20 border-b text-lg">
				{title}
			</h4>
			{children}
		</div>
	);
}

FooterLinksTab.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.node,
		PropTypes.string,
	]),
};

export default FooterLinksTab;
