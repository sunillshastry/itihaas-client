import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Minus, MoveRight, Network } from 'lucide-react';

function RulerPageItem({ ruler }) {
	return (
		<li className="my-10 first:my-5">
			<h3 className="text-primary-400 border-primary-40 border-b pb-2 text-xl font-bold">
				{ruler?.name}
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
