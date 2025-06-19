import { useEffect, useState } from 'react';

import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import PageSearchBar from '@/components/elements/PageSearchBar';
import PrimaryHeader from '@/components/elements/PrimaryHeader';
import Loader from '@/components/elements/Loader';
import DynastyPageList from '@/components/dynasty/DynastyPageList';
import Footer from '@/components/elements/Footer';
import FetchFailComponent from '@/components/elements/FetchFailComponent';
import EntitiesPageNoResult from '@/components/views/EntitiesPageNoResult';

/**
 * Main React.JSX page component for /dynasties: Dynasties page
 *
 * @returns The JSX for the dynasties page
 */
function DynastiesPage() {
	// State
	const [dynasties, setDynasties] = useState([]);
	const [queriedDynasties, setQueriedDynasties] = useState([]);
	const [loading, setLoading] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');

	const [error, setError] = useState({
		state: false,
		prompt: '',
	});

	// Effects
	useEffect(function () {
		/**
		 * Fetches all dynasties from the backend via async/await fetch request(s)
		 */
		async function fetchAllDynasties() {
			try {
				// Update error and loading to null, false respectively
				setError(function (current) {
					return {
						...current,
						state: false,
						prompt: '',
					};
				});

				setLoading(true);

				// Make a fetch request
				const BASE_URL = import.meta.env.VITE_BASE_SERVER_URI;
				const response = await fetch(`${BASE_URL}/dynasties`);
				const data = await response.json();

				// Check for success/failure responses
				if (response.ok && data?.success) {
					setDynasties(data?.data?.dynasties);
				} else {
					throw new Error();
				}
			} catch {
				// Handle failed fetch response
				setQueriedDynasties([]);
				setDynasties([]);

				setError(function (current) {
					return {
						...current,
						state: true,
						prompt: 'Failed to fetch data from the backend. Please try again',
					};
				});
			} finally {
				// Update loading status
				setLoading(false);
			}
		}

		fetchAllDynasties();
	}, []);

	useEffect(function () {
		// Update document title field
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
					{!error.state && (
						<PageSearchBar
							className="mt-5"
							placeholder="Search all dynasties..."
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
						{queriedDynasties.length === 0 && searchQuery.length >= 3 && (
							<EntitiesPageNoResult query={searchQuery} />
						)}

						<DynastyPageList
							dynasties={
								queriedDynasties.length > 0 ? queriedDynasties : dynasties
							}
						/>
					</>
				)}
			</MainContainer>
			<Footer className="mt-36" />
		</>
	);
}

export default DynastiesPage;
