import getWar from '@/api/getWar';
import FetchFailComponent from '@/components/elements/FetchFailComponent';
import Footer from '@/components/elements/Footer';
import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import { useCitation } from '@/context/CitationContext';
import usePageURL from '@/hooks/usePageURL';
import updateWindowTitle from '@/utils/updateWindowTitle';
import { useQuery } from '@tanstack/react-query';
import { Suspense, useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import NotFound from './NotFound';
import Loader from '@/components/elements/Loader';
import BackButton from '@/components/elements/BackButton';
import CopyURLButton from '@/components/views/CopyURLButton';
import CiteDropdown from '@/components/views/CiteDropdown';
import { War } from '@/interfaces/War';
import PrimaryHeader from '@/components/elements/PrimaryHeader';
import SecondaryHeader from '@/components/elements/SecondaryHeader';
import formatArrayToString from '@/utils/formatArrayToString';
import QuickFacts from '@/components/elements/QuickFacts';
import WarQuickFieldsContainer from '@/components/war/WarQuickFieldsContainer';

function WarPage() {
	const { warSlug: slug } = useParams();
	const [title, setTitle] = useState<string>(
		'Itihaas | The Front Page of Indian History'
	);

	const [refetchCount, setRefetchCount] = useState(0);

	const [params, setParams] = useSearchParams();
	const { dispatch } = useCitation();
	const pageURL = usePageURL();

	// Data Fetching (React Query)
	const {
		data: war,
		error,
		isPending,
		refetch,
	} = useQuery({
		queryKey: ['war', slug],
		queryFn: () => getWar(slug as string),
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
			updateWindowTitle(setTitle, war?.name as string);

			return () => {
				window.document.title = 'Itihaas | The Front Page of Indian History';
			};
		},
		[war]
	);

	// Error State
	if (error || (war instanceof Error && war?.name === 'TypeError')) {
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
				<Footer className="mt-36 max-md:mt-20" />
			</>
		);
	}

	// NotFound state
	if (war?.name === 'NotFoundError') {
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
				<Footer className="mt-36 max-md:mt-20" />
			</>
		);
	}

	if (war !== undefined && !(war instanceof Error)) {
		return (
			<>
				<Navbar />
				<MainContainer>
					<div>
						<div className="flex items-baseline justify-between max-md:flex-col max-md:items-start max-md:justify-start">
							<BackButton />
							<div className="flex items-baseline gap-2 max-md:self-end">
								<CopyURLButton />
								<CiteDropdown
									pageTitle={(war as War) && (war?.name as string)}
									updatedDate={war?.updatedAt as Date}
									url={pageURL || window.location.href}
								/>
							</div>
						</div>
						<PrimaryHeader className="max-md:mt-4">{war?.name}</PrimaryHeader>

						<SecondaryHeader>
							{war?.otherNames && formatArrayToString<string>(war?.otherNames)}
						</SecondaryHeader>

						<SecondaryHeader className="mt-4">
							{war?.timeline && war.timeline.begin} -{' '}
							{war?.timeline && war.timeline.end}
						</SecondaryHeader>
					</div>

					<Suspense fallback={<Loader size="medium" />}>
						<QuickFacts>
							<WarQuickFieldsContainer war={war} />
						</QuickFacts>
					</Suspense>
				</MainContainer>
			</>
		);
	}
}

export default WarPage;
