import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import MainContainer from '../components/MainContainer';
import Navbar from '../components/Navbar';
import PageSearchBar from '../components/PageSearchBar';
import PrimaryHeader from '../components/PrimaryHeader';
import Loader from '../components/Loader';
import RulerPageList from '../components/RulerPageList';

function RulersPage() {
	const [rulers, setRulers] = useState([]);
	const [queriedRulers, setQueriedRulers] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(function () {
		async function fetchAllRulers() {
			try {
				setLoading(true);
				const BASE_URL = import.meta.env.VITE_BASE_SERVER_URI;
				const response = await fetch(`${BASE_URL}/rulers`);
				const data = await response.json();

				if (response.ok && data?.success) {
					setRulers(data?.data?.rulers);
				} else {
					throw new Error();
				}
			} catch {
				setQueriedRulers([]);
				setRulers([]);
			} finally {
				setLoading(false);
			}
		}

		fetchAllRulers();
	}, []);

	useEffect(
		function () {
			if (searchQuery.length >= 3) {
				setQueriedRulers(
					rulers.filter((dynasty) =>
						dynasty.name
							.toLowerCase()
							.includes(searchQuery.trim().toLowerCase())
					)
				);
			} else {
				setQueriedRulers([]);
			}
		},
		[rulers, searchQuery]
	);

	return (
		<>
			<Navbar />
			<MainContainer>
				<div>
					<PrimaryHeader>Rulers</PrimaryHeader>
					<PageSearchBar
						className="mt-5"
						placeholder="Search all rulers..."
						value={searchQuery}
						onChange={setSearchQuery}
						setSearchQuery={setSearchQuery}
					/>
				</div>

				{loading ? (
					<Loader />
				) : (
					<RulerPageList
						rulers={queriedRulers.length > 0 ? queriedRulers : rulers}
					/>
				)}
			</MainContainer>
			<Footer />
		</>
	);
}

export default RulersPage;
