import { Link } from 'react-router-dom';
import { ArrowRight, Clock3 } from 'lucide-react';

function NoDescriptionDialog() {
	return (
		<section className="mt-10 font-medium">
			<h2 className="text-primary-600 border-b-primary-600/25 flex items-center border-b pb-2 text-xl font-semibold">
				<span>Content Coming Soon</span>
				<span className="ml-2">
					<Clock3 size={20} />
				</span>
			</h2>
			<p className="text-primary-500 mt-3">
				This section is currently under development, or lacks the information.
				Please check back later for updated content and new information
			</p>
			<Link
				to="/issues"
				className="text-primary-100 hover:text-primary-600 mt-2 flex items-center underline"
			>
				<span>or, add the description for this page yourself</span>
				<span className="ml-1">
					<ArrowRight size={16} />
				</span>
			</Link>
		</section>
	);
}

export default NoDescriptionDialog;
