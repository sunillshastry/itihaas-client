import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import NoResultsText from '@/components/views/NoResultsText';
import SuggestionLink from '@/components/views/SuggestionLink';
import Loader from '@/components/elements/Loader';
import SearchTotalResults from '@/components/views/SearchTotalResults';
import { useQuery } from '@tanstack/react-query';
import getSearchResults from '@/api/getSearchResults';

function SearchSuggestionTab({ displayed, query, handleLinkClick }) {
	const [queriedResults, setQueriedResults] = useState([]);
	const [loading, setLoading] = useState(false);

	const { refetch, isPending, isFetching, isError } = useQuery({
		queryKey: ['search'],
		queryFn: () => getSearchResults(query),
		enabled: false,
	});

	useEffect(
		function () {
			if (query.length < 3) {
				setQueriedResults([]);
				return;
			}

			setLoading(true);
			const timeout = setTimeout(function () {
				refetch().then(function (response) {
					setQueriedResults(response.data || []);
					setLoading(false);
				});
			}, 300);

			return () => clearTimeout(timeout);
		},
		[query, refetch]
	);

	return (
		<div
			className={`shadow-primary-800/50 absolute z-10 max-h-[250px] w-full overflow-y-scroll rounded-b-md bg-white p-2 text-sm shadow-sm ${displayed ? 'block' : 'hidden'}`}
		>
			{loading || isFetching || isPending ? (
				<Loader size="small" />
			) : (
				<>
					{(queriedResults.length === 0 || isError) && (
						<NoResultsText query={query} />
					)}
					{queriedResults.length > 0 && (
						<SearchTotalResults length={queriedResults.length} />
					)}
					<ul className="list-none">
						{queriedResults.map(function (queriedResult) {
							return (
								<SuggestionLink
									key={queriedResult._id}
									queryResult={queriedResult}
									handleLinkClick={handleLinkClick}
								/>
							);
						})}
					</ul>
				</>
			)}
		</div>
	);
}

SearchSuggestionTab.propTypes = {
	displayed: PropTypes.bool.isRequired,
	query: PropTypes.string,
	handleLinkClick: PropTypes.func,
};

export default SearchSuggestionTab;
