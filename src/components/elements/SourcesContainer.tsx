import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

import SubHeader from '@/components/elements/SubHeader';
import PageLinkField from '@/components/views/PageLinkField';
import NoSectionDialog from '@/components/views/NoSectionDialog';
import SubHeaderLink from '../views/SubHeaderLink';

interface FunctionProps {
	sources: string[] | undefined;
}

function SourcesContainer({ sources }: FunctionProps) {
	if (sources && sources.length === 0) {
		return <NoSectionDialog name="Sources" />;
	}

	return (
		<section className="mt-5">
			<SubHeader>
				<SubHeaderLink to="#sources">Sources</SubHeaderLink>
			</SubHeader>
			<div className="mt-3 flex flex-col items-start justify-start">
				{sources &&
					sources.map(function (source) {
						return (
							<PageLinkField
								key={uuid()}
								className="my-1"
								native={true}
								to={source}
							>
								{source}
							</PageLinkField>
						);
					})}
			</div>
		</section>
	);
}

SourcesContainer.propTypes = {
	sources: PropTypes.array.isRequired,
};

export default SourcesContainer;
