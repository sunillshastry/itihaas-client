import { Data } from '@/interfaces/APIData';

/**
 * Get all dynasties from the server API
 *
 * @returns A Promise consisting of the API response
 */
async function getDynasties() {
	const BASE_URL = import.meta.env.VITE_BASE_SERVER_URI;

	try {
		// Get the initial response
		const response: Response = await fetch(`${BASE_URL}/dynasties`);

		// Check for failed response
		if (!response.ok) {
			throw new Error('Error: Failed to fetch all dynasties');
		}

		// Retrieve the data from response.json and return the main content
		const data: Data = await response.json();
		return data?.data?.dynasties;
	} catch (e) {
		// Catch block: return the error object itself
		if (e instanceof Error) return e;
	}
}

export default getDynasties;
