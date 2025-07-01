import { usePlatformGrowth } from '@/context/PlatformGrowthContext';
import { Database, Dot } from 'lucide-react';
import PropTypes from 'prop-types';

function PlatformGrowthButton({ click }) {
	const { hidden } = usePlatformGrowth();

	return (
		<button
			className="bg-primary-300hover:bg-primary-200 text-primary-50 mt-2 mb-5 flex items-center rounded-xl px-2 py-1 text-sm font-medium hover:cursor-pointer"
			onClick={click}
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
