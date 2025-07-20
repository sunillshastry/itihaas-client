import { lazy, Suspense, useEffect, useMemo, useState } from 'react';

import Footer from '@/components/elements/Footer';
import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import PageSearchBar from '@/components/elements/PageSearchBar';
import PrimaryHeader from '@/components/elements/PrimaryHeader';
import Loader from '@/components/elements/Loader';
import FetchFailComponent from '@/components/elements/FetchFailComponent';
import EntitiesPageNoResult from '@/components/views/EntitiesPageNoResult';
import { useQuery } from '@tanstack/react-query';
import getRulers from '@/api/getRulers';
import AddingNewContentUI from '@/components/elements/AddingNewContentUI';
import { Ruler } from '@/interfaces/Ruler';
import { useSearchParams } from 'react-router-dom';
import { ArrowDownNarrowWide } from 'lucide-react';
import Select from '@/components/elements/Select';
import SearchSortByOptions from '@/data/SearchSortByOptions';

// Code splitting (lazy loading)
const RulerPageList = lazy(() => import('@/components/ruler/RulerPageList'));

function RulersPage() {
	// Query params
	const [params, setParams] = useSearchParams();

	// State
	const [queriedRulers, setQueriedRulers] = useState<Ruler[]>([]);
	const [searchQuery, setSearchQuery] = useState<string>('');
	const [refetchCount, setRefetchCount] = useState(0);
	const [sortByValue, setSortByValue] = useState<string>('');

	const sortQuery = params.get('sort')?.trim();

	// Data fetching (React Query)
	const {
		data: rulers,
		error,
		isPending,
		refetch,
	} = useQuery({
		queryKey: ['rulers'],
		queryFn: getRulers,
	});

	function handleSortChange(value: string) {
		setSortByValue(value);
		setParams((currentParams) => {
			currentParams.set('sort', value);
			return currentParams;
		});
	}

	// Effects
	useEffect(function () {
		// Update document title field
		window.document.title =
			'Itihaas | Rulers | The Front Page of Indian History';

		return () => {
			window.document.title = 'Itihaas | The Front Page of Indian History';
		};
	}, []);

	// Sync initial sort param to select input
	useEffect(() => {
		if (sortQuery) setSortByValue(sortQuery);
	}, [sortQuery]);

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

	// Final sorted dynasties list
	const finalRulers = useMemo(() => {
		if (!rulers || rulers instanceof Error) return [];

		let result = [...rulers];

		if (searchQuery.length >= 3) {
			result = result.filter((dynasty) =>
				dynasty.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
			);
		}

		const sortVal = sortQuery?.toLowerCase();

		if (sortVal === 'alphabetical-a-z') {
			result.sort((a, b) =>
				a.name.toLowerCase().localeCompare(b.name.toLowerCase())
			);
		} else if (sortVal === 'alphabetical-z-a') {
			result.sort((a, b) =>
				b.name.toLowerCase().localeCompare(a.name.toLowerCase())
			);
		} else if (sortVal === 'created') {
			result.sort(
				(a, b) =>
					new Date(a?.createdAt ?? 0).getTime() -
					new Date(b?.createdAt ?? 0).getTime()
			);
		} else if (sortVal === 'last-updated') {
			result.sort(
				(a, b) =>
					new Date(b?.updatedAt ?? 0).getTime() -
					new Date(a?.updatedAt ?? 0).getTime()
			);
		} else if (sortVal === 'chronological') {
			// TODO: Add actual chronological sorting logic here
		}

		return result;
	}, [rulers, searchQuery, sortQuery]);

	// Error State
	if (error || (rulers instanceof Error && rulers?.name === 'TypeError')) {
		return (
			<>
				<Navbar />
				<MainContainer>
					<FetchFailComponent
						refetchFn={refetch}
						refetchCount={refetchCount}
						refetchCountUpdate={setRefetchCount}
					/>
				</MainContainer>
				<Footer className="mt-36 max-md:mt-20" />
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
				<Footer className="mt-36 max-md:mt-20" />
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
					<div className="mt-5 flex items-end justify-between max-lg:flex-col max-lg:items-start max-lg:justify-start max-lg:gap-y-6">
						<PageSearchBar
							className="max-lg:w-full"
							placeholder="Search all rulers..."
							value={searchQuery}
							onChange={setSearchQuery}
							setSearchQuery={setSearchQuery}
						/>

						<div>
							<label
								id="dynasties-sort"
								className="text-primary-20 flex items-center gap-2 font-bold uppercase"
							>
								<span>Sort by</span>
								<span>
									<ArrowDownNarrowWide size={14} />
								</span>
							</label>
							<Select
								className="mt-1 min-w-44"
								options={SearchSortByOptions}
								value={sortByValue}
								onChange={handleSortChange}
								placeholder="Sort result by"
								aria-label="dynasties-sort"
								name="dynasties-sort"
							/>
						</div>
					</div>
				</div>

				{finalRulers?.length === 0 && searchQuery?.length >= 3 && (
					<EntitiesPageNoResult query={searchQuery} />
				)}

				{queriedRulers.length === 0 && searchQuery.length >= 3 && (
					<EntitiesPageNoResult query={searchQuery} />
				)}

				<Suspense fallback={<Loader />}>
					<RulerPageList rulers={finalRulers} />
				</Suspense>
			</MainContainer>
			<Footer className="mt-36" />
		</>
	);
}

export default RulersPage;
