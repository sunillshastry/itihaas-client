import { BadgeAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

function QuickFactsNoField() {
	return (
		<span>
			<span className="flex items-center">
				<span>Unavailable</span>
				<span>
					<BadgeAlert
						size={18}
						className="ml-1"
					/>
				</span>
			</span>

			<Link
				to="/issues"
				className="bg-primary-600 hover:bg-primary-20 rounded-full px-1.5 py-1 font-mono text-xs uppercase transition"
			>
				update
			</Link>
		</span>
	);
}

export default QuickFactsNoField;
