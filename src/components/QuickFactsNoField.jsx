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
				className="text-primary-60 hover:text-primary-70 text-xs lowercase underline"
			>
				(update this)
			</Link>
		</span>
	);
}

export default QuickFactsNoField;
