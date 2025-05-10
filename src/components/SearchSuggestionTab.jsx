import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import NoResultsText from './NoResultsText';
import SuggestionLink from './SuggestionLink';
import Loader from './Loader';

function SearchSuggestionTab({ displayed, query, handleLinkClick }) {
	const [queriedResults, setQueriedResults] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(
		function () {
			async function fetchAutocompleteOptions() {
				try {
					setLoading(true);
					// Fetch dynasties
					const BASE_URL = import.meta.env.VITE_BASE_SERVER_URI;
					const response = await fetch(
						`${BASE_URL}/dynasties/search/titles?include=id,slug`
					);
					const data = await response.json();

					// Fetch rulers
					// Fetch wars

					// Add to query list
					if (response.ok && data?.success) {
						setQueriedResults(
							data.data.dynasties.filter((dynasty) =>
								dynasty.name.toLowerCase().includes(query.toLowerCase())
							)
						);
						setLoading(false);
					} else {
						throw new Error();
					}
				} catch {
					setQueriedResults([]);
					setLoading(false);
				} finally {
					setLoading(false);
				}
			}

			const timeout = setTimeout(function () {
				if (query.length >= 3) {
					fetchAutocompleteOptions();
				}
			}, 300);

			return () => clearTimeout(timeout);
		},
		[query]
	);

	return (
		<div
			className={`absolute max-h-[250px] w-full overflow-y-scroll bg-white p-2 text-sm ${displayed ? 'block' : 'hidden'}`}
		>
			{loading ? (
				<Loader size="small" />
			) : (
				<>
					{queriedResults.length === 0 && <NoResultsText query={query} />}

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
