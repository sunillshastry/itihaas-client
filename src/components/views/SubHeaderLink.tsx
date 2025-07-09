import { Hash } from 'lucide-react';
import PropTypes from 'prop-types';

interface FunctionProps {
	to: string;
	children: Readonly<React.ReactNode>;
}

function SubHeaderLink({ to, children }: FunctionProps) {
	return (
		<a
			href={to}
			className="group flex items-center"
		>
			<span>{children}</span>
			<span className="ml-1 opacity-0 transition-all duration-150 ease-in group-hover:opacity-50">
				<Hash />
			</span>
		</a>
	);
}

SubHeaderLink.propTypes = {
	to: PropTypes.string.isRequired,
	children: PropTypes.node,
};

export default SubHeaderLink;
