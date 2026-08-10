import { War } from '@/interfaces/War';
import WarPageItem from './WarPageItem';

interface FunctionProps {
	wars: War[];
}

export default function WarPageList({ wars }: FunctionProps) {
	return (
		<section className="mt-10">
			<ul>
				{wars.map(function (war) {
					return (
						<WarPageItem
							key={war._id}
							war={war}
						/>
					);
				})}
			</ul>
		</section>
	);
}
