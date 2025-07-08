import getDynastiesTitles from '@/api/getDynastiesTitles';
import getRulersTitles from '@/api/getRulersTitles';

/**
 * Get all search titles from the server API
 *
 * @returns A Promise consisting of the API response
 */
async function getSearchResults(query) {
	// Boundary case for query value with length less than three
	if (!query || query.length < 3) return [];

	try {
		// Get dynasty search titles
		const dynasties = await getDynastiesTitles();

		// Get ruler search titles
		const rulers = await getRulersTitles();

		// Final search results
		let searchResults = [];

		// Filter and append dynasty search results
		if (dynasties?.length > 0) {
			searchResults = [
				...searchResults,
				...dynasties.filter((dynasty) =>
					dynasty.name.toLowerCase().includes(query.toLowerCase())
				),
			];
		}

		// Filter and append ruler search results
		if (rulers?.length > 0) {
			searchResults = [
				...searchResults,
				...rulers.filter((ruler) =>
					ruler.name.toLowerCase().includes(query.toLowerCase())
				),
			];
		}

		// Return the search results array
		return searchResults;
	} catch (e) {
		// Catch block: Return the error object itself
		return e;
	}
}

export default getSearchResults;
