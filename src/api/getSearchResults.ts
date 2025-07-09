import getDynastiesTitles from '@/api/getDynastiesTitles';
import getRulersTitles from '@/api/getRulersTitles';
import type { SearchTitle } from '@/interfaces/SearchTitle';

/**
 * Get all search titles from the server API
 *
 * @returns A Promise consisting of the API response
 */
async function getSearchResults(
	query: string
): Promise<string[] | undefined | Error | SearchTitle[]> {
	// Boundary case for query value with length less than three
	if (!query || query.length < 3) return [];

	try {
		// Get dynasty search titles
		const dynasties = (await getDynastiesTitles()) as SearchTitle[];

		// Get ruler search titles
		const rulers = (await getRulersTitles()) as SearchTitle[];

		// Final search results
		let searchResults: SearchTitle[] = [];

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
		if (e instanceof Error) return e;
	}
}

export default getSearchResults;
