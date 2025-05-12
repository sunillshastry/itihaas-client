import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MainContainer from '../components/MainContainer';
import PrimaryHeader from '../components/PrimaryHeader';
import SecondaryHeader from '../components/SecondaryHeader';
import formatArrayToString from '../utils/formatArrayToString';
import Loader from '../components/Loader';
import QuickFacts from '../components/QuickFacts';
import Footer from '../components/Footer';
import DescriptionContainer from '../components/DescriptionContainer';
import SourcesContainer from '../components/SourcesContainer';
import BackButton from '../components/BackButton';

function DynastyPage() {
	const [loading, setLoading] = useState(false);

	const { dynastySlug: slug } = useParams();
	const [dynasty, setDynasty] = useState({});
	const [title, setTitle] = useState(
		'Itihaas | The Front Page of Indian History'
	);
	const navigate = useNavigate();

	function updateWindowTitle(name) {
		setTitle(`Itihaas | ${name} | The Front Page of Indian History`);
	}

	useEffect(
		function () {
			async function fetchDynasty() {
				try {
					setLoading(true);
					const BASE_URL = import.meta.env.VITE_BASE_SERVER_URI;

					const response = await fetch(`${BASE_URL}/dynasties/${slug}`);
					const data = await response.json();

					if (response.ok && data?.success) {
						setDynasty(data.data.dynasty);
						updateWindowTitle(data.data.dynasty?.name);
					} else {
						throw new Error();
					}
					setLoading(false);
				} catch {
					setDynasty({});
					navigate('/not-found');
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
						<div>
							<BackButton />
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

						<QuickFacts dynasty={dynasty} />

						<DescriptionContainer
							descriptionList={dynasty?.description?.long}
						/>

						<SourcesContainer sources={dynasty?.sources} />

						{/* TODO: RULERS CONTAINER */}

						{/* TODO: WARS CONTAINER */}
					</>
				)}
			</MainContainer>
			<Footer />
		</>
	);
}

export default DynastyPage;
