import {
	Bug,
	RotateCw,
	SquareArrowOutUpRight,
	TriangleAlert,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import BasicButton from '@/components/elements/BasicButton';

function FetchFailComponent({
	children = "We're having trouble fetching the data from the server. Refresh page, or try again soon.",
}) {
	const navigate = useNavigate();

	function handleReloadPage() {
		window.location.reload();
	}

	function handleNavigateToIssues() {
		try {
			navigate('/issues');
		} catch {
			navigate('/');
		}
	}

	return (
		<div className="flex flex-col items-center justify-center">
			<h2 className="text-primary-600 mt-16 flex items-center justify-center text-center text-lg font-medium">
				<span>{children}</span>

				<span className="ml-1">
					<TriangleAlert size={20} />
				</span>
			</h2>

			<div className="mt-2 flex">
				<BasicButton
					onClick={handleReloadPage}
					className="m-2"
				>
					<span>Refresh Page</span>
					<span className="ml-1">
						<RotateCw size={14} />
					</span>
				</BasicButton>

				<BasicButton
					onClick={handleNavigateToIssues}
					className="m-2"
				>
					<span>Send Feedback</span>
					<span className="ml-1">
						<Bug size={14} />
					</span>
				</BasicButton>
			</div>

			<div className="border-primary-20/35 mt-3 flex w-full items-center justify-center border-t pt-4 text-center">
				<span>or&nbsp;</span>
				<a
					href="https://github.com/sunillshastry/itihaas-api/"
					target="_blank"
					className="text-primary-400 hover:text-primary-20 flex items-center justify-center underline"
				>
					<span>View documentation on&nbsp;</span>
					<span className="flex items-center">
						<span>GitHub</span>
						<span className="ml-1">
							<SquareArrowOutUpRight size={14} />
						</span>
					</span>
				</a>
			</div>
		</div>
	);
}

FetchFailComponent.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.node,
		PropTypes.string,
	]),
};

export default FetchFailComponent;
