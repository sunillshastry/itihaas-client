import {
	Bug,
	RefreshCw,
	RotateCw,
	SquareArrowOutUpRight,
	TriangleAlert,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import BasicButton from '@/components/elements/BasicButton';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import { Dynasty } from '@/interfaces/Dynasty';
import { Ruler } from '@/interfaces/Ruler';
import { Dispatch, SetStateAction, useState } from 'react';

interface FunctionProps {
	children?: Readonly<React.ReactNode> | string;
	refetchFn: (
		options?: RefetchOptions
	) => Promise<
		QueryObserverResult<
			(Dynasty | Ruler)[] | Dynasty | Ruler | Error | undefined,
			Error
		>
	>;
	refetchCount: number;
	refetchCountUpdate: Dispatch<SetStateAction<number>>;
}

const MAX_REFETCH_ATTEMPTS = 3;

function FetchFailComponent({
	refetchFn,
	refetchCount,
	refetchCountUpdate,
}: FunctionProps) {
	const [message, setMessage] = useState(
		`We're having trouble fetching the data from the server. Please try again.`
	);
	const [isRefresh, setIsRefresh] = useState(false);
	const navigate = useNavigate();

	function handleRefetch() {
		setIsRefresh(false);

		if (refetchCount >= 3) {
			setMessage(
				`We tried a few times to reconnect, but the server's not responding. You can try refreshing the page manually, or try again later.`
			);
			setIsRefresh(true);
			return;
		}
		refetchCountUpdate((current) => current + 1);
		refetchFn();
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
				<span>{message}</span>

				<span className="ml-1 max-md:hidden">
					<TriangleAlert size={20} />
				</span>
			</h2>

			<div className="mt-2 flex">
				{!isRefresh ? (
					<BasicButton
						onClick={handleRefetch}
						className="m-2"
					>
						<span>
							Retry{' '}
							{refetchCount > 0 && `(${refetchCount}/${MAX_REFETCH_ATTEMPTS})`}
						</span>
						<span className="ml-1">
							<RefreshCw size={14} />
						</span>
					</BasicButton>
				) : (
					<BasicButton
						className="m-2"
						onClick={() => window.location.reload()}
					>
						<span>Refresh Page</span>
						<span className="ml-1">
							<RotateCw size={14} />
						</span>
					</BasicButton>
				)}

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
