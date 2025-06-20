import { Database } from 'lucide-react';
import PropTypes from 'prop-types';

function PlatformGrowthButton({ click }) {
	return (
		<button
			className="bg-primary-300 text-sm flex items-center py-1 px-2 rounded-xl mt-2 hover:cursor-pointer hover:bg-primary-200 text-primary-50 mb-5 font-medium"
			onClick={click}
		>
			<span>
				<Database size={15} />
			</span>
			<span className="ml-1">Platform Growth</span>
		</button>
	);
}

PlatformGrowthButton.propTypes = {
	click: PropTypes.func.isRequired,
};

export default PlatformGrowthButton;
