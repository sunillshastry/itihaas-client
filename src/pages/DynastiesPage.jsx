import { useEffect, useState } from 'react';
import MainContainer from '../components/MainContainer';
import Navbar from '../components/Navbar';
import PageSearchBar from '../components/PageSearchBar';
import PrimaryHeader from '../components/PrimaryHeader';
import Loader from '../components/Loader';
import DynastyPageList from '../components/DynastyPageList';
import Footer from '../components/Footer';

function DynastiesPage() {
	const [dynasties, setDynasties] = useState([]);
	const [queriedDynasties, setQueriedDynasties] = useState([]);
	const [loading, setLoading] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');

	useEffect(function () {
		async function fetchAllDynasties() {
			try {
				setLoading(true);
				const BASE_URL = import.meta.env.VITE_BASE_SERVER_URI;
				const response = await fetch(`${BASE_URL}/dynasties`);
				const data = await response.json();

				if (response.ok && data?.success) {
					setDynasties(data?.data?.dynasties);
				} else {
					throw new Error();
				}
			} catch {
				setQueriedDynasties([]);
				setDynasties([]);
			} finally {
				setLoading(false);
			}
		}

		fetchAllDynasties();
	}, []);

	useEffect(function () {
		window.document.title =
			'Itihaas | Dynasties | The Front Page of Indian History';

		return () => {
			window.document.title = 'Itihaas | The Front Page of Indian History';
		};
	}, []);

	useEffect(
		function () {
			if (searchQuery.length >= 3) {
				setQueriedDynasties(
					dynasties.filter((dynasty) =>
						dynasty.name
							.toLowerCase()
							.includes(searchQuery.trim().toLowerCase())
					)
				);
			} else {
				setQueriedDynasties([]);
			}
		},
		[dynasties, searchQuery]
	);

	return (
		<>
			<Navbar />
			<MainContainer>
				<div>
					<PrimaryHeader>Dynasties</PrimaryHeader>
					<PageSearchBar
						className="mt-5"
						placeholder="Search all dynasties..."
						value={searchQuery}
						onChange={setSearchQuery}
						setSearchQuery={setSearchQuery}
					/>
				</div>

				{loading ? (
					<Loader />
				) : (
					<DynastyPageList
						dynasties={
							queriedDynasties.length > 0 ? queriedDynasties : dynasties
						}
					/>
				)}
			</MainContainer>
			<Footer />
		</>
	);
}

export default DynastiesPage;
