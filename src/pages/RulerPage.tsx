import { lazy, Suspense, useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import BackButton from '@/components/elements/BackButton';
import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import PrimaryHeader from '@/components/elements/PrimaryHeader';
import RulerQuickFieldsContainer from '@/components/ruler/RulerQuickFieldsContainer';
import SecondaryHeader from '@/components/elements/SecondaryHeader';
import Loader from '@/components/elements/Loader';
import FetchFailComponent from '@/components/elements/FetchFailComponent';
import formatArrayToString from '@/utils/formatArrayToString';
import MissingInfoDialog from '@/components/views/MissingInfoDialog';
import LastUpdateMessage from '@/components/views/LastUpdateMessage';
import Footer from '@/components/elements/Footer';
import CiteDropdown from '@/components/views/CiteDropdown';
import { useQuery } from '@tanstack/react-query';
import getRuler from '@/api/getRuler';
import updateWindowTitle from '@/utils/updateWindowTitle';
import HashContainer from '@/components/elements/HashContainer';
import { useCitation } from '@/context/CitationContext';
import usePageURL from '@/hooks/usePageURL';
import NotFound from '@/pages/NotFound';
import CopyURLButton from '@/components/views/CopyURLButton';

// Code splitting (lazy loading)
const ArticlesContainer = lazy(
	() => import('@/components/elements/ArticlesContainer')
);

const FurtherReadingContainer = lazy(
	() => import('@/components/elements/FurtherReadingContainer')
);

const SourcesContainer = lazy(
	() => import('@/components/elements/SourcesContainer')
);

const DescriptionContainer = lazy(
	() => import('@/components/elements/DescriptionContainer')
);
const QuickFacts = lazy(() => import('@/components/elements/QuickFacts'));

function RulerPage() {
	// State
	const { rulerSlug: slug } = useParams();
	const [params, setParams] = useSearchParams();
	const { dispatch } = useCitation();
	const pageURL = usePageURL();

	const [title, setTitle] = useState<string>(
		'Itihaas | The Front Page of Indian History'
	);
	const [refetchCount, setRefetchCount] = useState(0);

	// Data Fetching (React Query)
	const {
		data: ruler,
		isPending,
		error,
		refetch,
	} = useQuery({
		queryKey: ['ruler', slug],
		queryFn: () => getRuler(slug as string),
	});

	// Effects
	useEffect(
		function () {
			updateWindowTitle(setTitle, ruler?.name as string);

			return () => {
				window.document.title = 'Itihaas | The Front Page of Indian History';
			};
		},
		[ruler]
	);

	useEffect(
		function () {
			const citationFormat = params.get('citationFormat');
			const allowedFormats = ['harvard', 'chicago', 'apa', 'mla'];

			if (citationFormat) {
				if (allowedFormats.includes(citationFormat)) {
					setParams(function (searchParams) {
						searchParams.set('citationFormat', citationFormat);
						return searchParams;
					});

					dispatch({ type: `format/${citationFormat}` });
				} else {
					dispatch({ type: `format/mla` });
				}
			}
		},
		[params, setParams, dispatch]
	);
	useEffect(
		function () {
			window.document.title = title;

			return () => {
				window.document.title = 'Itihaas | The Front Page of Indian History';
			};
		},
		[title]
	);

	// Error State
	if (error || (ruler instanceof Error && ruler?.name === 'TypeError')) {
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
	if (ruler?.name === 'NotFoundError') {
		// return navigate('/not-found');
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

	if (ruler !== undefined && !(ruler instanceof Error)) {
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
									pageTitle={ruler?.name}
									updatedDate={ruler?.updatedAt as Date}
									url={pageURL || window.location.href}
								/>
							</div>
						</div>
						<PrimaryHeader>{ruler?.name}</PrimaryHeader>

						<SecondaryHeader>
							{ruler?.otherNames &&
								formatArrayToString<string>(ruler?.otherNames)}
						</SecondaryHeader>

						<SecondaryHeader className="mt-4">
							{ruler?.born && ruler.born} -&nbsp;
							{ruler?.died && ruler.died}
						</SecondaryHeader>
					</div>

					<Suspense fallback={<Loader />}>
						<QuickFacts>
							<RulerQuickFieldsContainer ruler={ruler} />
						</QuickFacts>

						<DescriptionContainer
							descriptionList={ruler?.description?.long as string[]}
						/>

						<HashContainer id="sources">
							<SourcesContainer sources={ruler?.sources} />
						</HashContainer>

						<HashContainer id="reading">
							<FurtherReadingContainer readings={ruler?.furtherReading} />
						</HashContainer>

						{/* TODO: WARS CONTAINER */}

						<HashContainer id="articles">
							<ArticlesContainer articles={ruler?.articles} />
						</HashContainer>
					</Suspense>

					<MissingInfoDialog />

					<LastUpdateMessage date={ruler?.updatedAt} />
				</MainContainer>
				<Footer className="mt-36" />
			</>
		);
	}
}

export default RulerPage;
