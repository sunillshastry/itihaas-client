import { usePlatformGrowth } from '@/context/PlatformGrowthContext';
import { Database, Dot } from 'lucide-react';
import PropTypes from 'prop-types';

interface FunctionProps {
	onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
function PlatformGrowthButton({ onClick }: FunctionProps) {
	const { hidden } = usePlatformGrowth();

	return (
		<button
			className="from-primary-300 to-primary-500 hover:from-primary-500 hover:to-primary-500 text-primary-50 mt-2 mb-5 flex items-center rounded-xl bg-linear-to-r px-2 py-1 text-sm font-medium hover:cursor-pointer"
			onClick={onClick}
		>
			<span>
				<Database size={15} />
			</span>
			<span className="ml-1">Platform Growth</span>
			{hidden && (
				<span className="text-primary-70">
					<Dot size={18} />
				</span>
			)}
		</button>
	);
}

PlatformGrowthButton.propTypes = {
	click: PropTypes.func.isRequired,
};

export default PlatformGrowthButton;
