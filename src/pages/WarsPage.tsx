import getWars from '@/api/getWars';
import BuildingContentBanner from '@/components/elements/BuildingContentBanner';
import FetchFailComponent from '@/components/elements/FetchFailComponent';
import Footer from '@/components/elements/Footer';
import Loader from '@/components/elements/Loader';
import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import PrimaryHeader from '@/components/elements/PrimaryHeader';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

function WarsPage() {
	const [initialColdStart, setInitialColdStart] = useState(false);
	const [refetchCount, setRefetchCount] = useState(0);

	const {
		data: wars,
		isPending,
		error,
		refetch,
	} = useQuery({
		queryKey: ['wars'],
		queryFn: getWars,
	});

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
				<PrimaryHeader>Wars</PrimaryHeader>
				<BuildingContentBanner />
			</MainContainer>
			<Footer className="mt-36" />
		</>
	);
}

export default WarsPage;
