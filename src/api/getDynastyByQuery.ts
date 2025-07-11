import { Data } from '@/interfaces/APIData';

/**
 * Get all dynasty related content via query from the server API
 *
 * @returns A Promise consisting of the API response
 */
async function getDynastyByQuery(query: string) {
	const BASE_URL = import.meta.env.VITE_BASE_SERVER_URI;

	try {
		// Get the initial response from backend
		const response: Response = await fetch(`${BASE_URL}/dynasties/s/${query}`);

		// Check for a failed response
		if (!response.ok) {
			throw new Error('Error: Failed to fetch dynasty data by query');
		}

		// Retrieve data from the response.json and return the main content
		const data: Data = await response.json();
		return data?.data?.dynasties;
	} catch (e) {
		// Catch block: return the error object itself
		if (e instanceof Error) return e;
	}
}

export default getDynastyByQuery;
