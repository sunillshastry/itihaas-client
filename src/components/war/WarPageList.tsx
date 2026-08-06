import { War } from '@/interfaces/War';

interface FunctionProps {
	wars: War[];
}

export default function WarPageList({ wars }: FunctionProps) {
	return (
		<section className="mt-10">
			<ul>
				{wars.map(function (war) {
					return <li key={war?._id}>{war.name}</li>;
				})}
			</ul>
		</section>
	);
}
