import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MainContainer from '../components/MainContainer';
import PrimaryHeader from '../components/PrimaryHeader';
import SecondaryHeader from '../components/SecondaryHeader';
import formatArrayToString from '../utils/formatArrayToString';
import Skeleton from 'react-loading-skeleton';

function DynastyPage() {
	const { dynastySlug: slug } = useParams();
	const [dynasty, setDynasty] = useState({});
	const navigate = useNavigate();

	useEffect(
		function () {
			async function fetchDynasty() {
				const BASE_URL = import.meta.env.VITE_BASE_SERVER_URI;

				const response = await fetch(`${BASE_URL}/dynasties/${slug}`);
				const data = await response.json();

				if (response.ok && data?.success) {
					setDynasty(data.data.dynasty);
				} else {
					setDynasty({});
					navigate('/not-found');
				}
			}

			fetchDynasty();
		},
		[slug, navigate]
	);

	console.log(dynasty);

	return (
		<>
			<Navbar />
			<MainContainer>
				<div>
					<PrimaryHeader>{dynasty?.name || <Skeleton />}</PrimaryHeader>
					<SecondaryHeader>
						{dynasty?.otherNames && formatArrayToString(dynasty?.otherNames)}
					</SecondaryHeader>

					<SecondaryHeader className="mt-4">
						{dynasty?.timeline && dynasty.timeline.begin} -{' '}
						{dynasty?.timeline && dynasty.timeline.end}
					</SecondaryHeader>
				</div>
			</MainContainer>
		</>
	);
}

export default DynastyPage;
