import { BadgeAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { v4 as uuid } from 'uuid';

function QuickFactsNoField() {
	const id = `quick-field-${uuid()}`;

	return (
		<span>
			<Tooltip id={id}>
				<span>Currently missing. Update it using the button below.</span>
			</Tooltip>
			<span className="text-primary-70 flex items-center font-mono text-xs font-medium">
				<span>Not Available</span>
				<span
					data-tooltip-id={id}
					data-tooltip-place="top"
				>
					<BadgeAlert
						size={15}
						className="ml-1"
					/>
				</span>
			</span>

			<Link
				to="/issues/fix"
				className="bg-primary-600 hover:bg-primary-20 rounded-full px-1.5 py-1 font-mono text-xs uppercase transition"
			>
				update
			</Link>
		</span>
	);
}

export default QuickFactsNoField;
