import { Dynasty } from '@/interfaces/Dynasty';
import { Ruler } from '@/interfaces/Ruler';
import {
	ArrowRight,
	BadgeCheck,
	BookOpenText,
	Newspaper,
	RefreshCcw,
	ScrollText,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Loader from '../elements/Loader';
import BasicButton from '../elements/BasicButton';
import { useCallback, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Tooltip } from 'react-tooltip';
import useUpdateDate from '@/hooks/useUpdateDate';

interface FunctionProps {
	type: 'dynasties' | 'rulers' | 'wars';
	entity: Dynasty & Ruler;
	loading: boolean;
	refetch: () => void;
	error?: Error | null;
}

const ENTITY_AUTO_REFETCH_ALIVE_DURATION = 15000;

export default function RandomEntityView({
	type,
	entity,
	loading,
	refetch,
	error,
}: FunctionProps) {
	const [isAnimating, setIsAnimating] = useState<boolean>(false);

	// Setup the page link for each entity using slug
	let seeMoreLinkUrl;
	if (type === 'dynasties') {
		seeMoreLinkUrl = `/dynasties/${entity?.slug}`;
	} else if (type === 'rulers') {
		seeMoreLinkUrl = `/rulers/${entity?.slug}`;
	} else if (type === 'wars') {
		seeMoreLinkUrl = `/wars/${entity?.slug}`;
	} else {
		seeMoreLinkUrl = '/';
	}

	// Simple fading animation
	const performRefetchAnimation = useCallback(() => {
		setIsAnimating(true);
		setTimeout(function () {
			refetch();
		}, 100);
		setTimeout(function () {
			setIsAnimating(false);
		}, 400);
	}, [refetch]);

	useEffect(
		function () {
			const interval = setInterval(function () {
				performRefetchAnimation();
			}, ENTITY_AUTO_REFETCH_ALIVE_DURATION);

			return () => clearInterval(interval);
		},
		[performRefetchAnimation]
	);

	const date = useUpdateDate(entity?.updatedAt as string);

	// Error State
	if (error || (entity instanceof Error && entity?.name === 'TypeError')) {
		return (
			<div className="bg-primary-500 text-primary-70 my-4 rounded-md px-6 py-4 text-sm">
				<div className="flex items-center justify-between">
					<div>
						<p className="text-lg font-medium">
							Unable to fetch entity information
						</p>
						<p className="mt-2">
							We are currently facing issues while fetching required
							information, please try again.
						</p>
					</div>
					<Tooltip id={`refetch-${entity?.slug}`}>Retry</Tooltip>
					<BasicButton
						variant="light"
						onClick={() => performRefetchAnimation()}
						data-tooltip-id={`refetch-${entity?.slug}`}
						data-tooltip-place="top"
						aria-label="Refetch Random Entity"
					>
						<RefreshCcw size={16} />
					</BasicButton>
				</div>
			</div>
		);
	}

	return (
		<div className="bg-primary-500 text-primary-70 my-4 rounded-md px-6 py-4 text-sm">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-x-1.5">
					<Tooltip id={`refetch-${entity?.slug}`}>Shuffle Entity</Tooltip>

					<BasicButton
						variant="light"
						onClick={() => performRefetchAnimation()}
						data-tooltip-id={`refetch-${entity?.slug}`}
						data-tooltip-place="top"
						aria-label="Refetch Random Entity"
					>
						<RefreshCcw size={16} />
					</BasicButton>
					<span className="text-primary-60 text-xs">
						Refreshes every 15 seconds
					</span>
				</div>

				{!loading && (
					<Link
						to={seeMoreLinkUrl}
						className="hover:text-primary-80 hover:bg-primary-100 bg-primary-200/75 inline-flex items-center gap-x-1 rounded-sm p-2 text-right text-sm transition"
					>
						<span>Explore more</span>
						<span>
							<ArrowRight size={14} />
						</span>
					</Link>
				)}
			</div>

			{loading ? (
				<div className="py-4">
					<Loader size="medium" />
				</div>
			) : (
				<>
					<div
						className={twMerge(
							'border-primary-60/25 mt-2 border-t transition',
							isAnimating && 'opacity-0'
						)}
					>
						<h3 className="mt-3 text-lg font-medium">{entity?.name}</h3>

						<div className="mt-1.5 flex gap-x-1 text-sm font-medium">
							{type === 'dynasties' && entity?.timeline?.begin ? (
								<p>{entity?.timeline?.begin}&nbsp;-</p>
							) : (
								<></>
							)}
							{type === 'dynasties' && entity?.timeline?.end ? (
								<p>{entity?.timeline?.end}</p>
							) : (
								<></>
							)}

							{type === 'rulers' && entity?.born ? (
								<p>{entity?.born}&nbsp;-</p>
							) : (
								<></>
							)}
							{type === 'rulers' && entity?.died ? (
								<p>{entity?.died}</p>
							) : (
								<></>
							)}
						</div>

						<p className="mt-2 text-sm leading-8 italic">
							{entity?.description?.oneline}
						</p>

						<div className="mt-1 flex gap-x-4 text-sm">
							<p className="flex items-center gap-x-1">
								<span>
									<ScrollText size={14} />
								</span>
								<span>{entity?.sources?.length} Sources</span>
							</p>

							<p className="flex items-center gap-x-1">
								<span>
									<Newspaper size={14} />
								</span>
								<span>{entity?.articles?.length} Articles</span>
							</p>

							<p className="flex items-center gap-x-1">
								<span>
									<BookOpenText size={14} />
								</span>
								<span>{entity?.furtherReading?.length} Readings</span>
							</p>
						</div>

						<p className="border-primary-60/25 mt-4 flex items-center gap-x-1 border-t pt-2">
							<span>
								<BadgeCheck size={16} />
							</span>
							<span>Last updated on {date}</span>
						</p>
					</div>
				</>
			)}
		</div>
	);
}
