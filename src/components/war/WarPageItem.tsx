import useUpdateDate from '@/hooks/useUpdateDate';
import { War } from '@/interfaces/War';
import formatArrayToString from '@/utils/formatArrayToString';
import { Info, MoveRight, Skull, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

interface FunctionProps {
	war: War;
}

export default function WarPageItem({ war }: FunctionProps) {
	const updatedDate = useUpdateDate(new Date(war?.updatedAt || ''));
	const createdDate = useUpdateDate(new Date(war?.createdAt || ''));

	return (
		<li className="my-10 first:my-5">
			<Tooltip id={`war-${war._id}`}>
				<p className="text-xs font-medium">Created: {createdDate}</p>
				<p className="mt-1 text-xs font-medium">Last Updated: {updatedDate}</p>
			</Tooltip>

			<h3 className="text-primary-400 border-primary-40 relative flex items-center justify-start gap-2 border-b pb-2 text-xl font-bold">
				<span>{war?.name}</span>
				<span
					data-tooltip-id={`war-${war._id}`}
					data-tooltip-place="top"
				>
					<Info size={16} />
				</span>
			</h3>

			<div className="mt-3">
				<h5 className="text-primary-200 text-sm">
					{war?.timeline?.begin} to {war?.timeline?.end}
				</h5>

				<p className="text-primary mt-1">{war?.description?.oneline}</p>

				<p className="text-primary-20 mt-2 flex items-baseline gap-x-3 text-sm">
					<span className="flex items-center justify-start">
						<span>
							<Trophy size={14} />
						</span>
						<span className="ml-1">
							{formatArrayToString(war?.outcome?.winners)}
						</span>
					</span>

					<span className="flex items-center justify-start">
						<span>
							<Skull size={14} />
						</span>
						<span className="ml-1">
							{formatArrayToString(war?.outcome?.losers)}
						</span>
					</span>
				</p>

				<Link
					to={`${war?.slug}`}
					className="bg-primary-400 text-primary-70 hover:bg-primary-100 mt-2 inline-flex items-center gap-x-1 rounded-sm px-1.5 py-1 text-sm font-medium transition ease-in"
				>
					<span>Explore more</span>
					<span>
						<MoveRight size={14} />
					</span>
				</Link>
			</div>
		</li>
	);
}
