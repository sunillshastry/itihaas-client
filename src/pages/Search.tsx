import getQueryResults from '@/api/getQueryResults';
import AddingNewContentUI from '@/components/elements/AddingNewContentUI';
import FetchFailComponent from '@/components/elements/FetchFailComponent';
import Footer from '@/components/elements/Footer';
import Loader from '@/components/elements/Loader';
import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import PrimaryHeader from '@/components/elements/PrimaryHeader';
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

	const {
		data: searchResults,
		isPending,
		error,
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ['full-search', searchQuery],
		queryFn: () => getQueryResults(searchQuery as string),
	});

	function handleFilterChange(value: string) {
		setFilterByValue(value);

		if (searchResults !== undefined && !(searchResults instanceof Error)) {
			if (value === 'none') {
				setQueriedResults([...searchResults]);
				setParams(function (currentParams) {
					currentParams.set('filter', 'none');
					return currentParams;
				});
			} else {
				const filteredResults = searchResults.filter(function (searchResult) {
					return searchResult?.entity?.toLowerCase() === value.toLowerCase();
				});
				setQueriedResults([...filteredResults]);

				setParams(function (currentParams) {
					currentParams.set('filter', value.toLowerCase());
					return currentParams;
				});
			}
		}
	}

	function handleSortChange(value: string) {
		setSortByValue(value);
	}

	function getCustomResultsContent(results: (Dynasty | Ruler)[]) {
		if (results !== undefined && !(results instanceof Error)) {
			return results.length < 10 && results.length !== 0
				? `0${results.length}`
				: results.length;
		}
	}

	useEffect(
		function () {
			if (searchResults !== undefined && !(searchResults instanceof Error)) {
				setQueriedResults([...searchResults]);
			}
		},
		[searchQuery, searchResults]
	);

	useEffect(
		function () {
			const allowedFilters = ['dynasty', 'ruler', 'war', 'none'];

			if (searchResults !== undefined && !(searchResults instanceof Error)) {
				if (filterQuery && allowedFilters.includes(filterQuery)) {
					if (filterQuery === 'none') {
						setQueriedResults([...searchResults]);
					} else {
						const filteredResults = searchResults.filter(
							function (searchResult) {
								return (
									searchResult?.entity?.toLowerCase() ===
									filterQuery.toLowerCase()
								);
							}
						);
						setQueriedResults(() => [...filteredResults]);
						setFilterByValue(filterQuery);
					}
				} else {
					setQueriedResults([...searchResults]);
				}
			}
		},
		[filterQuery, searchResults]
	);

	useEffect(
		function () {
			window.document.title = title;

			return () => {
				window.document.title = 'Itihaas | The Front Page of Indian History';
			};
		},
		[title]
	);

	useEffect(
		function () {
			if (searchResults && !(searchResults instanceof Error)) {
				updateWindowTitle(setTitle, `Search '${searchQuery}'`);
			}

			return () => {
				window.document.title = 'Itihaas | The Front Page of Indian History';
			};
		},
		[searchResults, searchQuery]
	);

	// Error State (API not working or other internal error)
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
				<Footer className="mt-36" />
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
				<Footer className="mt-36" />
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
				</MainContainer>
				<Footer className="mt-36" />
			</>
		);
	}
}

export default Search;
