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
import { useQuery } from '@tanstack/react-query';
import getRulers from '@/api/getRulers';
import AddingNewContentUI from '@/components/elements/AddingNewContentUI';
import { Ruler } from '@/interfaces/Ruler';

function RulersPage() {
	// State
	const [queriedRulers, setQueriedRulers] = useState<Ruler[]>([]);
	const [searchQuery, setSearchQuery] = useState<string>('');

	// Data fetching (React Query)
	const {
		data: rulers,
		error,
		isPending,
	} = useQuery({
		queryKey: ['rulers'],
		queryFn: getRulers,
	});

	// Effects
	useEffect(function () {
		// Update document title field
		window.document.title =
			'Itihaas | Rulers | The Front Page of Indian History';

		return () => {
			window.document.title = 'Itihaas | The Front Page of Indian History';
		};
	}, []);

	useEffect(
		function () {
			if (searchQuery.length >= 3) {
				if (Array.isArray(rulers) && !(rulers instanceof Error)) {
					setQueriedRulers(
						rulers.filter((ruler) =>
							ruler.name
								.toLowerCase()
								.includes(searchQuery.trim().toLowerCase())
						)
					);
				}
			} else {
				setQueriedRulers([]);
			}
		},
		[rulers, searchQuery]
	);

	// Error State
	if (error || (rulers instanceof Error && rulers?.name === 'TypeError')) {
		return (
			<>
				<Navbar />
				<MainContainer>
					<FetchFailComponent />
				</MainContainer>
				<Footer className="mt-36" />
			</>
		);
	}

	// Loading State
	if (isPending) {
		return (
			<>
				<Navbar />
				<MainContainer>
					<Loader />
				</MainContainer>
				<Footer className="mt-36" />
			</>
		);
	}

	return (
		<>
			<Navbar />
			<MainContainer>
				<div>
					<AddingNewContentUI />
					<PrimaryHeader>Rulers</PrimaryHeader>
					<PageSearchBar
						className="mt-5"
						placeholder="Search all rulers..."
						value={searchQuery}
						onChange={setSearchQuery}
						setSearchQuery={setSearchQuery}
					/>
				</div>

				{queriedRulers.length === 0 && searchQuery.length >= 3 && (
					<EntitiesPageNoResult query={searchQuery} />
				)}
				<RulerPageList
					rulers={
						queriedRulers.length > 0
							? (queriedRulers as Ruler[])
							: (rulers as Ruler[])
					}
				/>
			</MainContainer>
			<Footer className="mt-36" />
		</>
	);
}

export default RulersPage;
