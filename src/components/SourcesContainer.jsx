import PropTypes from 'prop-types';
import SubHeader from './SubHeader';
import PageLinkField from './PageLinkField';
import NoSectionDialog from './NoSectionDialog';

function SourcesContainer({ sources }) {
	if (sources && sources.length === 0) {
		return <NoSectionDialog name="Sources" />;
	}

	return (
		<section className="mt-5">
			<SubHeader>Sources</SubHeader>
			<div className="mt-3 flex flex-col items-start justify-start">
				{sources &&
					sources.map(function (source, i) {
						return (
							<PageLinkField
								key={i}
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
