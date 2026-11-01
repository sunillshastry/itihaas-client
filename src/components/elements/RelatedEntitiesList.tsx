import formatArrayToString from '@/utils/formatArrayToString';
import SubHeaderLink from '../views/SubHeaderLink';
import SubHeader from './SubHeader';

interface FunctionProps {
	type: 'dynasty' | 'ruler' | 'war';
	list: string[];
}

export default function RelatedEntities({ type, list }: FunctionProps) {
	const getListHeader = (listType: 'dynasty' | 'ruler' | 'war') => {
		switch (listType) {
			case 'dynasty':
				return 'Related Dynasties';
			case 'ruler':
				return 'Related Rulers';
			case 'war':
				return 'Related Wars';
		}
	};

	console.log(list);
	return (
		<>
			<div className="my-6">
				<SubHeader>
					<SubHeaderLink to={`#related-${type}`}>
						{getListHeader(type)}
					</SubHeaderLink>
				</SubHeader>

				<p className="mt-4">{formatArrayToString(list)}</p>
			</div>
		</>
	);
}
