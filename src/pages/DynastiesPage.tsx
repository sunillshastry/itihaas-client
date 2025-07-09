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
import { useQuery } from '@tanstack/react-query';
import getDynasties from '@/api/getDynasties';
import AddingNewContentUI from '@/components/elements/AddingNewContentUI';
import { Dynasty } from '@/interfaces/Dynasty';

/**
 * Main React.JSX page component for /dynasties: Dynasties page
 *
 * @returns The JSX for the dynasties page
 */
function DynastiesPage() {
	// State
	const [queriedDynasties, setQueriedDynasties] = useState<Dynasty[]>([]);
	const [searchQuery, setSearchQuery] = useState<string>('');

	// Data fetching (React Query)
	const {
		data: dynasties,
		isPending,
		error,
	} = useQuery({
		queryKey: ['dynasties'],
		queryFn: getDynasties,
	});

	// Effects
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
				if (Array.isArray(dynasties) && !(dynasties instanceof Error)) {
					setQueriedDynasties(
						dynasties.filter((dynasty) =>
							dynasty.name
								.toLowerCase()
								.includes(searchQuery.trim().toLowerCase())
						)
					);
				}
			} else {
				setQueriedDynasties([]);
			}
		},
		[dynasties, searchQuery]
	);

	// Error State
	if (
		error ||
		(dynasties instanceof Error && dynasties?.name === 'TypeError')
	) {
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
					<PrimaryHeader>Dynasties</PrimaryHeader>
					<PageSearchBar
						className="mt-5"
						placeholder="Search all dynasties..."
						value={searchQuery}
						onChange={setSearchQuery}
						setSearchQuery={setSearchQuery}
					/>
				</div>

				{queriedDynasties?.length === 0 && searchQuery?.length >= 3 && (
					<EntitiesPageNoResult query={searchQuery} />
				)}

				<DynastyPageList
					dynasties={
						queriedDynasties?.length > 0
							? (queriedDynasties as Dynasty[])
							: (dynasties as Dynasty[])
					}
				/>
			</MainContainer>
			<Footer className="mt-36" />
		</>
	);
}

export default DynastiesPage;
