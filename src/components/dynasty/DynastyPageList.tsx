import PropTypes from 'prop-types';

import DynastyPageItem from '@/components/dynasty/DynastyPageItem';
import { Dynasty } from '@/interfaces/Dynasty';

interface FunctionProps {
	dynasties: Dynasty[];
}

function DynastyPageList({ dynasties }: FunctionProps) {
	return (
		<section className="mt-10">
			<ul>
				{dynasties.map(function (dynasty) {
					return (
						<DynastyPageItem
							key={dynasty._id}
							dynasty={dynasty}
						/>
					);
				})}
			</ul>
		</section>
	);
}

DynastyPageList.propTypes = {
	dynasties: PropTypes.array.isRequired,
};

export default DynastyPageList;
