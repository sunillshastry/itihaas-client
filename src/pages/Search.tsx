import getQueryResults from '@/api/getQueryResults';
import AddingNewContentUI from '@/components/elements/AddingNewContentUI';
import FetchFailComponent from '@/components/elements/FetchFailComponent';
import Footer from '@/components/elements/Footer';
import Loader from '@/components/elements/Loader';
import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import PrimaryHeader from '@/components/elements/PrimaryHeader';
import SearchResult from '@/components/elements/SearchResult';
import EmptySearchResult from '@/components/views/EmptySearchResult';
import updateWindowTitle from '@/utils/updateWindowTitle';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Search() {
	const [params] = useSearchParams();
	const [title, setTitle] = useState<string>(
		'Itihaas | The Front Page of Indian History'
	);
	const [refetchCount, setRefetchCount] = useState(0);

	const searchQuery = params.get('q')?.trim();

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
							{searchResults.length < 10 && searchResults.length !== 0
								? `0${searchResults.length}`
								: searchResults.length}{' '}
							results for &lsquo;{searchQuery}&rsquo;
						</PrimaryHeader>
					</div>

					{searchResults.length > 0 ? (
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
					) : (
						<EmptySearchResult />
					)}
				</MainContainer>
				<Footer className="mt-36" />
			</>
		);
	}
}

export default Search;
