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

	return (
		<>
			<Navbar />
			<MainContainer>
				<>
					<div>
						<BackButton />
						<PrimaryHeader>Pandu</PrimaryHeader>

						<SecondaryHeader>Pāṇḍu, Pandu of Chandravamsha</SecondaryHeader>
						<SecondaryHeader className="mt-4">
							1200 BCE - 800 BCE
						</SecondaryHeader>
					</div>

					<QuickFacts>
						<RulerQuickFieldsContainer />
					</QuickFacts>
				</>
			</MainContainer>
		</>
	);
}

export default RulerPage;
