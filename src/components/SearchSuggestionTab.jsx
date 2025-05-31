import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import NoResultsText from './NoResultsText';
import SuggestionLink from './SuggestionLink';
import Loader from './Loader';
import SearchTotalResults from './SearchTotalResults';

function SearchSuggestionTab({ displayed, query, handleLinkClick }) {
	const [queriedResults, setQueriedResults] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(
		function () {
			const BASE_URL = import.meta.env.VITE_BASE_SERVER_URI;

			async function fetchDynastyAutocomplete() {
				const response = await fetch(
					`${BASE_URL}/dynasties/search/titles?include=id,slug,type`
				);
				return response.json();
			}

			async function fetchRulerAutocomplete() {
				const response = await fetch(
					`${BASE_URL}/rulers/search/titles?include=id,slug,type`
				);
				return response.json();
			}

			async function fetchAutocompleteOptions() {
				try {
					setLoading(true);
					let totalResults = [];

					// Fetch dynasties
					const dynastyData = await fetchDynastyAutocomplete();
					if (dynastyData?.success) {
						const filtered = dynastyData.data.dynasties.filter((dynasty) =>
							dynasty.name.toLowerCase().includes(query.toLowerCase())
						);
						totalResults = [...totalResults, ...filtered];
					} else {
						throw new Error('Failed to fetch dynasty autocomplete options');
					}

					// Fetch rulers
					const rulerData = await fetchRulerAutocomplete();
					if (rulerData?.success) {
						const filtered = rulerData.data.rulers.filter((ruler) =>
							ruler.name.toLowerCase().includes(query.toLowerCase())
						);
						totalResults = [...totalResults, ...filtered];
					} else {
						throw new Error('Failed to fetch ruler autocomplete options');
					}

					// Fetch wars

					// Add to query list
					setQueriedResults(totalResults);
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
			className={`shadow-primary-800/50 absolute z-10 max-h-[250px] w-full overflow-y-scroll rounded-b-md bg-white p-2 text-sm shadow-sm ${displayed ? 'block' : 'hidden'}`}
		>
			{loading ? (
				<Loader size="small" />
			) : (
				<>
					{queriedResults.length === 0 && <NoResultsText query={query} />}
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
