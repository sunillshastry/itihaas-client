import getQueryResults from '@/api/getQueryResults';
import AddingNewContentUI from '@/components/elements/AddingNewContentUI';
import FetchFailComponent from '@/components/elements/FetchFailComponent';
import Footer from '@/components/elements/Footer';
import Loader from '@/components/elements/Loader';
import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import PrimaryHeader from '@/components/elements/PrimaryHeader';
import QueryLengthError from '@/components/elements/QueryLengthError';
import SearchResult from '@/components/elements/SearchResult';
import Select from '@/components/elements/Select';
import EmptySearchResult from '@/components/views/EmptySearchResult';
import SearchFilterByOptions from '@/data/SearchFilterByOptions';
import SearchSortByOptions from '@/data/SearchSortByOptions';
import { Dynasty } from '@/interfaces/Dynasty';
import { Ruler } from '@/interfaces/Ruler';
import updateWindowTitle from '@/utils/updateWindowTitle';
import { useQuery } from '@tanstack/react-query';
import { ArrowDownNarrowWide, SlidersHorizontal } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Search() {
	const [params, setParams] = useSearchParams();
	const [title, setTitle] = useState<string>(
		'Itihaas | The Front Page of Indian History'
	);
	const [refetchCount, setRefetchCount] = useState(0);
	const [filterByValue, setFilterByValue] = useState<string>('');
	const [sortByValue, setSortByValue] = useState<string>('');
	const [queriedResults, setQueriedResults] = useState<
		(Dynasty | Ruler)[] | null
	>(null);

	const searchQuery = params.get('q')?.trim();
	const filterQuery = params.get('filter')?.trim();
	const sortQuery = params.get('sort')?.trim();

	const {
		data: searchResults,
		isPending,
		error,
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ['full-search', searchQuery],
		queryFn: () => getQueryResults(searchQuery as string),
		enabled: (searchQuery?.length as number) >= 3,
	});

	function handleFilterChange(value: string) {
		setFilterByValue(value);
		setParams((currentParams) => {
			currentParams.set('filter', value);
			return currentParams;
		});
	}

	function handleSortChange(value: string) {
		setSortByValue(value);
		setParams((currentParams) => {
			currentParams.set('sort', value);
			return currentParams;
		});
	}

	function getCustomResultsContent(results: (Dynasty | Ruler)[]) {
		if (results !== undefined && !(results instanceof Error)) {
			return results.length < 10 && results.length !== 0
				? `0${results.length}`
				: results.length;
		}
	}

	// Combined filtering + sorting
	useEffect(() => {
		if (!searchResults || searchResults instanceof Error) return;

		let filtered = [...searchResults];

		// Filter
		if (filterQuery && filterQuery !== 'none') {
			filtered = filtered.filter(
				(item) => item.entity?.toLowerCase() === filterQuery.toLowerCase()
			);
		}

		// Sort
		if (sortQuery) {
			const sortVal = sortQuery.toLowerCase();

			if (sortVal === 'alphabetical-a-z') {
				filtered.sort((a, b) =>
					a.name.toLowerCase().localeCompare(b.name.toLowerCase())
				);
			} else if (sortVal === 'alphabetical-z-a') {
				filtered.sort((a, b) =>
					b.name.toLowerCase().localeCompare(a.name.toLowerCase())
				);
			} else if (sortVal == 'chronological') {
				// TODO: UPDATE THIS;
			} else if (sortVal === 'created') {
				filtered.sort(
					(a, b) =>
						new Date(a?.createdAt ?? 0).getTime() -
						new Date(b?.createdAt ?? 0).getTime()
				);
			} else if (sortVal === 'last-updated') {
				filtered.sort(
					(a, b) =>
						new Date(b?.updatedAt ?? 0).getTime() -
						new Date(a?.updatedAt ?? 0).getTime()
				);
			}
		}

		setQueriedResults(filtered);
	}, [searchResults, filterQuery, sortQuery]);

	// Set filter/sort dropdowns based on URL
	useEffect(() => {
		if (filterQuery) setFilterByValue(filterQuery);
		if (sortQuery) setSortByValue(sortQuery);
	}, [filterQuery, sortQuery]);

	useEffect(() => {
		window.document.title = title;
		return () => {
			window.document.title = 'Itihaas | The Front Page of Indian History';
		};
	}, [title]);

	useEffect(() => {
		if (searchResults && !(searchResults instanceof Error)) {
			updateWindowTitle(setTitle, `Results for '${searchQuery}'`);
		}
		return () => {
			window.document.title = 'Itihaas | The Front Page of Indian History';
		};
	}, [searchResults, searchQuery]);

	// Error State (Query Length)
	if (!searchQuery || (searchQuery && searchQuery.length < 3)) {
		return (
			<>
				<Navbar />
				<MainContainer>
					<QueryLengthError />
				</MainContainer>
				<Footer className="mt-36 max-md:mt-20" />
			</>
		);
	}

	// Error State (Global)
	if (error || searchResults instanceof Error) {
		return (
			<>
				<Navbar />
				<MainContainer>
					<FetchFailComponent
						refetchCount={refetchCount}
						refetchFn={refetch}
						refetchCountUpdate={setRefetchCount}
					/>
				</MainContainer>
				<Footer className="mt-36 max-md:mt-20" />
			</>
		);
	}

	// Loading state
	if (isPending || isLoading) {
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

	if (searchResults !== undefined && !(searchResults instanceof Error)) {
		return (
			<>
				<Navbar />
				<MainContainer>
					<div>
						<AddingNewContentUI />
						<PrimaryHeader>
							Found{' '}
							{queriedResults == null
								? getCustomResultsContent(searchResults)
								: getCustomResultsContent(queriedResults)}{' '}
							results for &lsquo;{searchQuery}&rsquo;
						</PrimaryHeader>

						<div className="mt-3 flex items-center justify-end">
							<div className="inline-flex flex-col items-start">
								<label
									id="search-filter"
									className="text-primary-20 flex items-center gap-2 font-bold uppercase"
								>
									<span>Filter By</span>
									<span>
										<SlidersHorizontal size={14} />
									</span>
								</label>
								<Select
									className="mt-1"
									options={SearchFilterByOptions}
									value={filterByValue}
									onChange={handleFilterChange}
									placeholder="Select an entity"
									aria-label="search-filter"
									name="search-filter"
								/>
							</div>

							<div className="ml-3 inline-flex flex-col items-start">
								<label
									id="search-sort"
									className="text-primary-20 flex items-center gap-2 font-bold uppercase"
								>
									<span>Sort By</span>
									<span>
										<ArrowDownNarrowWide size={14} />
									</span>
								</label>
								<Select
									className="mt-1 min-w-44"
									options={SearchSortByOptions}
									value={sortByValue}
									onChange={handleSortChange}
									placeholder="Sort results by"
									aria-label="search-sort"
									name="search-sort"
								/>
							</div>
						</div>
					</div>

					{queriedResults !== null && queriedResults.length > 0 && (
						<ul className="mt-10">
							{queriedResults.map(function (searchResult) {
								return (
									<SearchResult
										key={searchResult._id}
										entity={searchResult}
									/>
								);
							})}
						</ul>
					)}

					{queriedResults == null && searchResults.length > 0 && (
						<ul className="mt-10">
							{searchResults.map(function (searchResult) {
								return (
									<SearchResult
										key={searchResult._id}
										entity={searchResult}
									/>
								);
							})}
						</ul>
					)}

					{queriedResults == null && searchResults.length === 0 && (
						<EmptySearchResult />
					)}
					{queriedResults !== null && queriedResults.length === 0 && (
						<EmptySearchResult />
					)}
				</MainContainer>
				<Footer className="mt-36 max-md:mt-20" />
			</>
		);
	}
}

export default Search;
