import { useEffect, useState } from 'react';
import BackButton from '../components/BackButton';
import DescriptionContainer from '../components/DescriptionContainer';
import MainContainer from '../components/MainContainer';
import Navbar from '../components/Navbar';
import PrimaryHeader from '../components/PrimaryHeader';
import QuickFacts from '../components/QuickFacts';
import RulerQuickFieldsContainer from '../components/RulerQuickFieldsContainer';
import SecondaryHeader from '../components/SecondaryHeader';
import { useNavigate, useParams } from 'react-router-dom';
import updateWindowTitle from '../utils/updateWindowTitle';
import Loader from '../components/Loader';
import FetchFailComponent from '../components/FetchFailComponent';
import formatArrayToString from '../utils/formatArrayToString';
import SourcesContainer from '../components/SourcesContainer';
import FurtherReadingContainer from '../components/FurtherReadingContainer';
import ArticlesContainer from '../components/ArticlesContainer';
import MissingInfoDialog from '../components/MissingInfoDialog';
import LastUpdateMessage from '../components/LastUpdateMessage';

function RulerPage() {
	const navigate = useNavigate();
	const { rulerSlug: slug } = useParams();

	const [loading, setLoading] = useState(false);
	const [ruler, setRuler] = useState({});
	const [title, setTitle] = useState(
		'Itihaas | The Front Page of Indian History'
	);

	const [error, setError] = useState({
		state: false,
		prompt: '',
	});

	useEffect(
		function () {
			async function fetchRuler() {
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
					const response = await fetch(`${BASE_URL}/rulers/${slug}`);
					const data = await response.json();

					if (response?.ok && data?.success) {
						setRuler(data?.data?.ruler);
						updateWindowTitle(setTitle, data?.data?.ruler?.name);
					} else if (!response.ok && response.status === 404) {
						navigate('/not-found');
					} else {
						throw new Error();
					}
				} catch {
					setRuler({});
					setError(function (current) {
						return {
							...current,
							state: false,
							prompt: '',
						};
					});
				} finally {
					setLoading(false);
				}
			}

			fetchRuler();
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

	console.log(ruler);

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
									<BackButton />
									<PrimaryHeader>{ruler?.name}</PrimaryHeader>

									<SecondaryHeader>
										{ruler?.otherNames &&
											formatArrayToString(ruler?.otherNames)}
									</SecondaryHeader>

									<SecondaryHeader className="mt-4">
										{ruler?.born && ruler.born} -&nbsp;
										{ruler?.died && ruler.died}
									</SecondaryHeader>
								</div>

								<QuickFacts>
									<RulerQuickFieldsContainer ruler={ruler} />
								</QuickFacts>

								<DescriptionContainer
									descriptionList={ruler?.description?.long}
								/>

								<SourcesContainer sources={ruler?.sources} />

								<FurtherReadingContainer readings={ruler?.furtherReading} />

								{/* TODO: WARS CONTAINER */}

								<ArticlesContainer articles={ruler?.articles} />

								<MissingInfoDialog />

								<LastUpdateMessage date={ruler?.updatedAt} />
							</>
						)}
					</>
				)}
			</MainContainer>
		</>
	);
}

export default RulerPage;
