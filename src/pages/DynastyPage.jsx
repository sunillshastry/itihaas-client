import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MainContainer from '../components/MainContainer';
import PrimaryHeader from '../components/PrimaryHeader';
import SecondaryHeader from '../components/SecondaryHeader';
import formatArrayToString from '../utils/formatArrayToString';
import Loader from '../components/Loader';

function DynastyPage() {
	const [loading, setLoading] = useState(false);

	const { dynastySlug: slug } = useParams();
	const [dynasty, setDynasty] = useState({});
	const navigate = useNavigate();

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
					} else {
						setDynasty({});
						navigate('/not-found');
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

	// console.log(dynasty);

	return (
		<>
			<Navbar />
			<MainContainer>
				{loading ? (
					<Loader />
				) : (
					<>
						<div>
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
					</>
				)}
			</MainContainer>
		</>
	);
}

export default DynastyPage;
