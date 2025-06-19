import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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
import updateWindowTitle from '@/utils/updateWindowTitle';
import CiteDropdown from '@/components/views/CiteDropdown';

function DynastyPage() {
	const [loading, setLoading] = useState(false);

	const { dynastySlug: slug } = useParams();
	const [dynasty, setDynasty] = useState({});
	const [title, setTitle] = useState(
		'Itihaas | The Front Page of Indian History'
	);
	const [error, setError] = useState({
		state: false,
		prompt: '',
	});
	const navigate = useNavigate();

	useEffect(
		function () {
			async function fetchDynasty() {
				try {
					setLoading(true);
					setError(function (current) {
						return {
							...current,
							state: false,
							prompt: '',
						};
					});

					const BASE_URL = import.meta.env.VITE_BASE_SERVER_URI;

					const response = await fetch(`${BASE_URL}/dynasties/${slug}`);
					const data = await response.json();

					if (response.ok && data?.success) {
						setDynasty(data.data.dynasty);
						updateWindowTitle(setTitle, data.data.dynasty?.name);
					} else if (!response.ok && response.status === 404) {
						navigate('/not-found');
					} else {
						throw new Error();
					}
					setLoading(false);
				} catch {
					setDynasty({});
					setError(function (current) {
						return {
							...current,
							state: true,
							prompt: 'Failed to fetch data from the backend. Please try again',
						};
					});
				} finally {
					setLoading(false);
				}
			}

			fetchDynasty();
		},
		[slug, navigate]
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

	return (
		<>
			<Navbar />
			<MainContainer>
				{loading ? (
					<Loader />
				) : (
					<>
						{error.state ? (
							<FetchFailComponent />
						) : (
							<>
								<div>
									<div className="flex items-baseline justify-between">
										<BackButton />
										<CiteDropdown
											pageTitle={dynasty?.name}
											updatedDate={dynasty?.updatedAt}
											url={window.location.href}
										/>
									</div>
									<PrimaryHeader>{dynasty?.name}</PrimaryHeader>

									<SecondaryHeader>
										{dynasty?.otherNames &&
											formatArrayToString(dynasty?.otherNames)}
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
									descriptionList={dynasty?.description?.long}
								/>

								<SourcesContainer sources={dynasty?.sources} />

								<FurtherReadingContainer readings={dynasty?.furtherReading} />

								{/* TODO: RULERS CONTAINER */}

								{/* TODO: WARS CONTAINER */}

								<ArticlesContainer articles={dynasty?.articles} />

								<MissingInfoDialog />

								<LastUpdateMessage date={dynasty?.updatedAt} />
							</>
						)}
					</>
				)}
			</MainContainer>
			<Footer className="mt-36" />
		</>
	);
}

export default DynastyPage;
