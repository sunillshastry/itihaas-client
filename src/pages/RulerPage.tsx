import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import BackButton from '@/components/elements/BackButton';
import DescriptionContainer from '@/components/elements/DescriptionContainer';
import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import PrimaryHeader from '@/components/elements/PrimaryHeader';
import QuickFacts from '@/components/elements/QuickFacts';
import RulerQuickFieldsContainer from '@/components/ruler/RulerQuickFieldsContainer';
import SecondaryHeader from '@/components/elements/SecondaryHeader';
import Loader from '@/components/elements/Loader';
import FetchFailComponent from '@/components/elements/FetchFailComponent';
import formatArrayToString from '@/utils/formatArrayToString';
import SourcesContainer from '@/components/elements/SourcesContainer';
import FurtherReadingContainer from '@/components/elements/FurtherReadingContainer';
import ArticlesContainer from '@/components/elements/ArticlesContainer';
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

function RulerPage() {
	// State
	const { rulerSlug: slug } = useParams();
	const [params, setParams] = useSearchParams();
	const { open, format } = useCitation();
	const pageURL = usePageURL();

	const [title, setTitle] = useState(
		'Itihaas | The Front Page of Indian History'
	);

	// Data Fetching (React Query)
	const {
		data: ruler,
		isPending,
		error,
	} = useQuery({
		queryKey: ['ruler', slug],
		queryFn: () => getRuler(slug),
	});

	// Effects
	useEffect(
		function () {
			updateWindowTitle(setTitle, ruler?.name);

			return () => {
				window.document.title = 'Itihaas | The Front Page of Indian History';
			};
		},
		[ruler]
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
			window.document.title = title;

			return () => {
				window.document.title = 'Itihaas | The Front Page of Indian History';
			};
		},
		[title]
	);

	// Error State
	if (error || ruler?.name === 'TypeError') {
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

	return (
		<>
			<Navbar />
			<MainContainer>
				<div>
					<div className="flex items-baseline justify-between">
						<BackButton to="/rulers" />
						<div className="flex items-baseline gap-2">
							<CopyURLButton />
							<CiteDropdown
								pageTitle={ruler?.name}
								updatedDate={ruler?.updatedAt}
								url={pageURL || window.location.href}
							/>
						</div>
					</div>
					<PrimaryHeader>{ruler?.name}</PrimaryHeader>

					<SecondaryHeader>
						{ruler?.otherNames && formatArrayToString(ruler?.otherNames)}
					</SecondaryHeader>

					<SecondaryHeader className="mt-4">
						{ruler?.born && ruler.born} -&nbsp;
						{ruler?.died && ruler.died}
					</SecondaryHeader>
				</div>

				<QuickFacts>
					<RulerQuickFieldsContainer ruler={ruler} />
				</QuickFacts>

				<DescriptionContainer descriptionList={ruler?.description?.long} />

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

				<MissingInfoDialog />

				<LastUpdateMessage date={ruler?.updatedAt} />
			</MainContainer>
			<Footer className="mt-36" />
		</>
	);
}

export default RulerPage;
