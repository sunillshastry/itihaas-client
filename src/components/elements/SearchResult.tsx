import Badge from './Badge';
import formatArrayToString from '@/utils/formatArrayToString';
import { Link } from 'react-router-dom';
import SearchResultInfo from '../views/SearchResultInfo';
import { Ruler } from '@/interfaces/Ruler';
import { Dynasty } from '@/interfaces/Dynasty';

interface FunctionProps {
	entity: Dynasty | Ruler;
}

function SearchResult({ entity }: FunctionProps) {
	function getFormattedLinkViaEntity(): string | null {
		if (entity?.entity === 'dynasty') {
			return `/dynasties/${entity?.slug}`;
		}

		if (entity?.entity == 'ruler') {
			return `/rulers/${entity?.slug}`;
		}
		return null;
	}

	return (
		<li className="border-primary-50 bg-primary-80 hover:bg-primary-90 my-6 rounded-sm border p-3 shadow transition ease-in hover:cursor-pointer hover:shadow-lg">
			<Link to={getFormattedLinkViaEntity() as string}>
				<h4 className="flex items-center justify-start font-semibold underline underline-offset-4">
					<span className="text-xl">{entity?.name}</span>
					<Badge>{entity?.entity}</Badge>
				</h4>

				<h6 className="font-heading mt-2 text-sm">
					{formatArrayToString(entity?.otherNames)}
				</h6>

				<p className="text-primary-700 mt-1 text-sm">
					{entity?.description?.oneline}
				</p>

				<SearchResultInfo
					articles={entity?.articles?.length as number}
					sources={entity?.sources?.length as number}
					readings={entity?.furtherReading?.length as number}
				/>
			</Link>
		</li>
	);
}

export default SearchResult;
