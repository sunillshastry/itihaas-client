import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Info, Minus, MoveRight, Network } from 'lucide-react';
import { Ruler } from '@/interfaces/Ruler';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import useUpdateDate from '@/hooks/useUpdateDate';

interface FunctionProps {
	ruler: Ruler;
}

function RulerPageItem({ ruler }: FunctionProps) {
	const updatedDate = useUpdateDate(new Date(ruler?.updatedAt || ''));
	const createdDate = useUpdateDate(new Date(ruler?.createdAt || ''));

	return (
		<li className="my-10 first:my-5">
			<Tooltip id={`ruler-${ruler._id}`}>
				<p className="text-xs font-medium">Created: {createdDate}</p>
				<p className="mt-1 text-xs font-medium">Last updated: {updatedDate}</p>
			</Tooltip>
			<h3 className="text-primary-400 border-primary-40 relative flex items-center justify-start gap-2 border-b pb-2 text-xl font-bold">
				<span>{ruler?.name}</span>

				<span
					data-tooltip-id={`ruler-${ruler._id}`}
					data-tooltip-place="top"
				>
					<Info size={16} />
				</span>
			</h3>
			<div className="mt-3">
				<h5 className="text-primary-200 text-sm">
					{ruler?.born && ruler?.died ? (
						`${ruler?.born} - ${ruler?.died}`
					) : (
						<Minus size={16} />
					)}
				</h5>

				<p className="text-primary mt-1">{ruler?.description?.oneline}</p>

				<p className="text-primary-20 mt-2 flex items-baseline">
					<span>
						<Network size={18} />
					</span>
					<span className="ml-2">{ruler?.dynasty}</span>
				</p>

				<Link
					to={`${ruler?.slug}`}
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

RulerPageItem.propTypes = {
	ruler: PropTypes.object.isRequired,
};

export default RulerPageItem;
