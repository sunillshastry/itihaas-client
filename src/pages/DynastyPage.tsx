import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import Navbar from '@/components/elements/Navbar';
import MainContainer from '@/components/elements/MainContainer';
import PrimaryHeader from '@/components/elements/PrimaryHeader';
import SecondaryHeader from '@/components/elements/SecondaryHeader';
import formatArrayToString from '@/utils/formatArrayToString';
import Loader from '@/components/elements/Loader';
import QuickFacts from '@/components/elements/QuickFacts';
import Footer from '@/components/elements/Footer';
import DescriptionContainer from '@/components/elements/DescriptionContainer';
import SourcesContainer from '@/components/elements/SourcesContainer';
import BackButton from '@/components/elements/BackButton';
import ArticlesContainer from '@/components/elements/ArticlesContainer';
import FurtherReadingContainer from '@/components/elements/FurtherReadingContainer';
import LastUpdateMessage from '@/components/views/LastUpdateMessage';
import MissingInfoDialog from '@/components/views/MissingInfoDialog';
import FetchFailComponent from '@/components/elements/FetchFailComponent';
import DynastyQuickFieldsContainer from '@/components/dynasty/DynastyQuickFieldsContainer';
import CiteDropdown from '@/components/views/CiteDropdown';
import { useQuery } from '@tanstack/react-query';
import getDynasty from '@/api/getDynasty';
import updateWindowTitle from '@/utils/updateWindowTitle';
import HashContainer from '@/components/elements/HashContainer';
import { useCitation } from '@/context/CitationContext';
import usePageURL from '@/hooks/usePageURL';
import NotFound from '@/pages/NotFound';
import CopyURLButton from '@/components/views/CopyURLButton';
import { Dynasty } from '@/interfaces/Dynasty';

function DynastyPage() {
	// State
	const { dynastySlug: slug } = useParams();
	const [title, setTitle] = useState<string>(
		'Itihaas | The Front Page of Indian History'
	);

	const [refetchCount, setRefetchCount] = useState(0);

	const [params, setParams] = useSearchParams();
	const { dispatch } = useCitation();
	const pageURL = usePageURL();

	// Data Fetching (React Query)
	const {
		data: dynasty,
		error,
		isPending,
		refetch,
	} = useQuery({
		queryKey: ['dynasty', slug],
		queryFn: () => getDynasty(slug as string),
	});

	// Effects
	useEffect(
		function () {
			window.document.title = title;

			return () => {
				window.document.title = 'Itihaas | The Front Page of Indian History';
			};
		},
		[title]
	);

	useEffect(
		function () {
			const isCitationTabOpen = params.get('citationTab');

			if (isCitationTabOpen) {
				setParams(function (searchParams) {
					searchParams.set('citationTab', isCitationTabOpen);
					return searchParams;
				});

				dispatch({
					type: `open/${isCitationTabOpen === 'open' ? 'true' : 'false'}`,
				});
			}
		},
		[params, setParams, dispatch]
	);

	useEffect(
		function () {
			const citationFormat = params.get('citationFormat');

			if (citationFormat) {
				setParams(function (searchParams) {
					searchParams.set('citationFormat', citationFormat);
					return searchParams;
				});

				dispatch({ type: `format/${citationFormat}` });
			}
		},
		[params, setParams, dispatch]
	);

	useEffect(
		function () {
			updateWindowTitle(setTitle, dynasty?.name as string);

			return () => {
				window.document.title = 'Itihaas | The Front Page of Indian History';
			};
		},
		[dynasty]
	);

	// Error State
	if (error || (dynasty instanceof Error && dynasty?.name === 'TypeError')) {
		return (
			<>
				<Navbar />
				<MainContainer>
					<FetchFailComponent
						refetchFn={refetch}
						refetchCount={refetchCount}
						refetchCountUpdate={setRefetchCount}
					/>
				</MainContainer>
				<Footer className="mt-36" />
			</>
		);
	}

	// NotFound state
	if (dynasty?.name === 'NotFoundError') {
		return <NotFound />;
	}

	// Loading state
	if (isPending) {
		return (
			<>
				<Navbar />
				<MainContainer>
					<Loader />
				</MainContainer>
				<Footer className="mt-36" />
			</>
		);
	}

	if (dynasty !== undefined && !(dynasty instanceof Error)) {
		return (
			<>
				<Navbar />
				<MainContainer>
					<div>
						<div className="flex items-baseline justify-between">
							<BackButton />
							<div className="flex items-baseline gap-2">
								<CopyURLButton />
								<CiteDropdown
									pageTitle={(dynasty as Dynasty) && (dynasty?.name as string)}
									updatedDate={dynasty?.updatedAt as Date}
									url={pageURL || window.location.href}
								/>
							</div>
						</div>
						<PrimaryHeader>{dynasty?.name}</PrimaryHeader>

						<SecondaryHeader>
							{dynasty?.otherNames &&
								formatArrayToString<string>(dynasty?.otherNames)}
						</SecondaryHeader>

						<SecondaryHeader className="mt-4">
							{dynasty?.timeline && dynasty.timeline.begin} -{' '}
							{dynasty?.timeline && dynasty.timeline.end}
						</SecondaryHeader>
					</div>

					<QuickFacts>
						<DynastyQuickFieldsContainer dynasty={dynasty} />
					</QuickFacts>

					<DescriptionContainer
						descriptionList={dynasty?.description?.long as string[]}
					/>

					<HashContainer id="sources">
						<SourcesContainer sources={dynasty?.sources} />
					</HashContainer>

					<HashContainer id="reading">
						<FurtherReadingContainer readings={dynasty?.furtherReading} />
					</HashContainer>
					{/* TODO: RULERS CONTAINER */}

					{/* TODO: WARS CONTAINER */}

					<HashContainer id="articles">
						<ArticlesContainer articles={dynasty?.articles} />
					</HashContainer>

					<MissingInfoDialog />

					<LastUpdateMessage date={dynasty?.updatedAt} />
				</MainContainer>
				<Footer className="mt-36" />
			</>
		);
	}
}

export default DynastyPage;
