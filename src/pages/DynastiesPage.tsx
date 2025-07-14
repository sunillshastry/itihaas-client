import { useEffect, useMemo, useState } from 'react';

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
import { useSearchParams } from 'react-router-dom';
import Select from '@/components/elements/Select';
import SearchSortByOptions from '@/data/SearchSortByOptions';
import { ArrowDownNarrowWide } from 'lucide-react';

/**
 * Main React.JSX page component for /dynasties: Dynasties page
 *
 * @returns The JSX for the dynasties page
 */
function DynastiesPage() {
	// Query params
	const [params, setParams] = useSearchParams();

	// State
	const [searchQuery, setSearchQuery] = useState<string>('');
	const [refetchCount, setRefetchCount] = useState(0);
	const [sortByValue, setSortByValue] = useState<string>('');

	const sortQuery = params.get('sort')?.trim();

	// Data fetching (React Query)
	const {
		data: dynasties,
		isPending,
		error,
		refetch,
	} = useQuery({
		queryKey: ['dynasties'],
		queryFn: getDynasties,
	});

	function handleSortChange(value: string) {
		setSortByValue(value);
		setParams((currentParams) => {
			currentParams.set('sort', value);
			return currentParams;
		});
	}

	// Set page title on mount
	useEffect(function () {
		window.document.title =
			'Itihaas | Dynasties | The Front Page of Indian History';

		return () => {
			window.document.title = 'Itihaas | The Front Page of Indian History';
		};
	}, []);

	// Sync initial sort param to select input
	useEffect(() => {
		if (sortQuery) setSortByValue(sortQuery);
	}, [sortQuery]);

	// Final sorted dynasties list
	const finalDynasties = useMemo(() => {
		if (!dynasties || dynasties instanceof Error) return [];

		let result = [...dynasties];

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
	}, [dynasties, searchQuery, sortQuery]);

	// Error State
	if (
		error ||
		(dynasties instanceof Error && dynasties?.name === 'TypeError')
	) {
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
					<div className="mt-5 flex items-end justify-between">
						<PageSearchBar
							placeholder="Search all dynasties..."
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

				{finalDynasties?.length === 0 && searchQuery?.length >= 3 && (
					<EntitiesPageNoResult query={searchQuery} />
				)}

				<DynastyPageList dynasties={finalDynasties} />
			</MainContainer>
			<Footer className="mt-36" />
		</>
	);
}

export default DynastiesPage;
