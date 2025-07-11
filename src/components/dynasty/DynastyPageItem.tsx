import { Link } from 'react-router-dom';
import { Info, MapPin, MoveRight } from 'lucide-react';
import PropTypes from 'prop-types';

import formatArrayToString from '@/utils/formatArrayToString';
import { Dynasty } from '@/interfaces/Dynasty';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import useUpdateDate from '@/hooks/useUpdateDate';

interface FunctionProps {
	dynasty: Dynasty;
}

function DynastyPageItem({ dynasty }: FunctionProps) {
	const updatedDate = useUpdateDate(new Date(dynasty?.updatedAt || ''));
	const createdDate = useUpdateDate(new Date(dynasty?.createdAt || ''));

	return (
		<li className="my-10 first:my-5">
			<Tooltip id={`dynasty-${dynasty._id}`}>
				<p className="font-medium">Created: {createdDate}</p>
				<p className="mt-1 font-medium">Last updated: {updatedDate}</p>
			</Tooltip>
			<h3 className="text-primary-400 border-primary-40 relative flex items-center justify-start gap-2 border-b pb-2 text-xl font-bold">
				<span>{dynasty?.name}</span>
				<span
					data-tooltip-id={`dynasty-${dynasty._id}`}
					data-tooltip-place="top"
				>
					<Info size={16} />
				</span>
			</h3>
			<div className="mt-3">
				<h5 className="text-primary-200 text-sm">
					{dynasty?.timeline?.begin} to {dynasty?.timeline?.end}
				</h5>

				<p className="text-primary mt-1">{dynasty?.description?.oneline}</p>

				<p className="text-primary-20 mt-2 flex items-baseline">
					<span>
						<MapPin size={18} />
					</span>
					<span className="ml-1">
						{formatArrayToString<string>(dynasty?.locations)}
					</span>
				</p>

				<Link
					to={`${dynasty?.slug}`}
					className="text-primary-200 hover:bg-primary-600 hover:text-primary-70 mt-2 inline-flex items-center underline"
				>
					<span>Read more</span>
					<span>
						<MoveRight
							size={16}
							className="ml-1"
						/>
					</span>
				</Link>
			</div>
		</li>
	);
}

DynastyPageItem.propTypes = {
	dynasty: PropTypes.object.isRequired,
};

export default DynastyPageItem;
