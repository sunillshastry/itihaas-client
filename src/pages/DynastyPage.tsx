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

function DynastyPage() {
	// State
	const { dynastySlug: slug } = useParams();
	const [title, setTitle] = useState(
		'Itihaas | The Front Page of Indian History'
	);

	const [params, setParams] = useSearchParams();
	const { open, format } = useCitation();
	const pageURL = usePageURL();

	// Data Fetching (React Query)
	const {
		data: dynasty,
		error,
		isPending,
	} = useQuery({
		queryKey: ['dynasty', slug],
		queryFn: () => getDynasty(slug),
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
			const newSearchParams = new URLSearchParams(params.toString());
			newSearchParams.set('citationTab', open ? 'open' : 'close');
			setParams(newSearchParams);
		},
		[open, setParams, params]
	);

	useEffect(
		function () {
			const newSearchParams = new URLSearchParams(params.toString());
			newSearchParams.set('citationFormat', format);
			setParams(newSearchParams);
		},
		[format, params, setParams]
	);

	useEffect(
		function () {
			updateWindowTitle(setTitle, dynasty?.name);

			return () => {
				window.document.title = 'Itihaas | The Front Page of Indian History';
			};
		},
		[dynasty]
	);

	// Error State
	if (error || dynasty?.name === 'TypeError') {
		return (
			<>
				<Navbar />
				<MainContainer>
					<FetchFailComponent />
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

	return (
		<>
			<Navbar />
			<MainContainer>
				<div>
					<div className="flex items-baseline justify-between">
						<BackButton to="/dynasties" />
						<div className="flex items-baseline gap-2">
							<CopyURLButton />
							<CiteDropdown
								pageTitle={dynasty?.name}
								updatedDate={dynasty?.updatedAt}
								url={pageURL || window.location.href}
							/>
						</div>
					</div>
					<PrimaryHeader>{dynasty?.name}</PrimaryHeader>

					<SecondaryHeader>
						{dynasty?.otherNames && formatArrayToString(dynasty?.otherNames)}
					</SecondaryHeader>

					<SecondaryHeader className="mt-4">
						{dynasty?.timeline && dynasty.timeline.begin} -{' '}
						{dynasty?.timeline && dynasty.timeline.end}
					</SecondaryHeader>
				</div>

				<QuickFacts>
					<DynastyQuickFieldsContainer dynasty={dynasty} />
				</QuickFacts>

				<DescriptionContainer descriptionList={dynasty?.description?.long} />

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

export default DynastyPage;
