import getWars from '@/api/getWars';
import AddingNewContentUI from '@/components/elements/AddingNewContentUI';
import BuildingContentBanner from '@/components/elements/BuildingContentBanner';
import FetchFailComponent from '@/components/elements/FetchFailComponent';
import Footer from '@/components/elements/Footer';
import Loader from '@/components/elements/Loader';
import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import PageSearchBar from '@/components/elements/PageSearchBar';
import PrimaryHeader from '@/components/elements/PrimaryHeader';
import Select from '@/components/elements/Select';
import SearchSortByOptions from '@/data/SearchSortByOptions';
import { useQuery } from '@tanstack/react-query';
import { ArrowDownNarrowWide } from 'lucide-react';
import { Suspense, useEffect, useState } from 'react';

function WarsPage() {
	const [initialColdStart, setInitialColdStart] = useState(false);

	// States
	const [searchQuery, setSearchQuery] = useState<string>('');
	const [refetchCount, setRefetchCount] = useState(0);
	const [sortByValue, setSortByValue] = useState<string>('');

	const {
		data: wars,
		isPending,
		error,
		refetch,
	} = useQuery({
		queryKey: ['wars'],
		queryFn: getWars,
	});

	function handleSortChange(value: string) {
		setSortByValue(value);
	}

	// Set the page title on mount
	useEffect(function () {
		window.document.title = 'Itihaas | Wars | The Front Page of Indian History';

		return () => {
			window.document.title = 'Itihaas | The Front Page of Indian History';
		};
	});

	// Automatically update the cold start flag to ensure if the page is loading initially
	// while fetching or connecting to the database for the first time
	useEffect(
		function () {
			const timeout = setTimeout(function () {
				if (isPending) {
					setInitialColdStart(true);
				} else {
					setInitialColdStart(false);
				}

				return () => clearTimeout(timeout);
			}, 7000);
		},
		[isPending]
	);

	// Error State
	if (error || (wars instanceof Error && wars?.name === 'TypeError')) {
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

	// Loading state
	if (isPending || initialColdStart) {
		return (
			<>
				<Navbar />
				<MainContainer className="flex flex-col items-center">
					<Loader />
					{initialColdStart && (
						<p className="text-primary-200 mt-5 animate-pulse text-lg font-medium">
							Making initial connection to the server and database. This may
							take a moment, please wait...
						</p>
					)}
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

					<PrimaryHeader>Wars</PrimaryHeader>

					<div className="mt-5 flex items-end justify-between max-lg:flex-col max-lg:items-start max-lg:justify-start max-lg:gap-y-6">
						<PageSearchBar
							className="max-lg:w-full"
							placeholder="Search all wars..."
							value={searchQuery}
							onChange={setSearchQuery}
							setSearchQuery={setSearchQuery}
						/>

						<div>
							<label
								id="wars-sort"
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
								aria-label="wars-sort"
								name="wars-sort"
							/>
						</div>
					</div>

					{searchQuery.length === 0 && (
						<p className="text-primary-10 my-1 mt-3 text-sm font-semibold uppercase">
							Total results: 0
						</p>
					)}
				</div>

				<Suspense fallback={<Loader size="medium" />}>
					<BuildingContentBanner />
				</Suspense>
			</MainContainer>
			<Footer className="mt-36 max-md:mt-20" />
		</>
	);
}

export default WarsPage;
