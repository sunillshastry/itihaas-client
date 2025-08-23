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
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Tooltip } from 'react-tooltip';
import useUpdateDate from '@/hooks/useUpdateDate';

interface FunctionProps {
	type: 'dynasties' | 'rulers' | 'wars';
	entity: Dynasty & Ruler;
	loading: boolean;
	refetch: () => void;
}

export default function RandomEntityView({
	type,
	entity,
	loading,
	refetch,
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
	function performRefetchAnimation() {
		setIsAnimating(true);
		setTimeout(function () {
			refetch();
		}, 100);
		setTimeout(function () {
			setIsAnimating(false);
		}, 400);
	}

	const date = useUpdateDate(entity?.updatedAt as string);

	return (
		<div className="bg-primary-400 text-primary-60 my-4 rounded-md px-6 py-4 text-sm">
			<div className="flex items-center justify-between">
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

				<Tooltip id={`refetch-${entity?.slug}`}>Refetch Random</Tooltip>

				<BasicButton
					variant="light"
					onClick={() => performRefetchAnimation()}
					data-tooltip-id={`refetch-${entity?.slug}`}
					data-tooltip-place="top"
				>
					<RefreshCcw size={16} />
				</BasicButton>
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
								<h5>{entity?.timeline?.begin}&nbsp;-</h5>
							) : (
								<></>
							)}
							{type === 'dynasties' && entity?.timeline?.end ? (
								<h5>{entity?.timeline?.end}</h5>
							) : (
								<></>
							)}

							{type === 'rulers' && entity?.born ? (
								<h5>{entity?.born}&nbsp;-</h5>
							) : (
								<></>
							)}
							{type === 'rulers' && entity?.died ? (
								<h5>{entity?.died}</h5>
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
