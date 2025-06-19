import { useEffect, useState } from 'react';

import Footer from '@/components/elements/Footer';
import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import PageSearchBar from '@/components/elements/PageSearchBar';
import PrimaryHeader from '@/components/elements/PrimaryHeader';
import Loader from '@/components/elements/Loader';
import RulerPageList from '@/components/ruler/RulerPageList';
import FetchFailComponent from '@/components/elements/FetchFailComponent';
import EntitiesPageNoResult from '@/components/views/EntitiesPageNoResult';

function RulersPage() {
	const [rulers, setRulers] = useState([]);
	const [queriedRulers, setQueriedRulers] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');
	const [loading, setLoading] = useState(false);

	const [error, setError] = useState({
		state: false,
		prompt: '',
	});
	useEffect(function () {
		async function fetchAllRulers() {
			try {
				setError(function (current) {
					return {
						...current,
						state: false,
						prompt: '',
					};
				});
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

		fetchAllRulers();
	}, []);

	useEffect(
		function () {
			if (searchQuery.length >= 3) {
				setQueriedRulers(
					rulers.filter((ruler) =>
						ruler.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
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
					{!error.state && (
						<PageSearchBar
							className="mt-5"
							placeholder="Search all rulers..."
							value={searchQuery}
							onChange={setSearchQuery}
							setSearchQuery={setSearchQuery}
						/>
					)}
				</div>

				{error.state && <FetchFailComponent />}
				{loading ? (
					<Loader />
				) : (
					<>
						{queriedRulers.length === 0 && searchQuery.length >= 3 && (
							<EntitiesPageNoResult query={searchQuery} />
						)}
						<RulerPageList
							rulers={queriedRulers.length > 0 ? queriedRulers : rulers}
						/>
					</>
				)}
			</MainContainer>
			<Footer className="mt-36" />
		</>
	);
}

export default RulersPage;
