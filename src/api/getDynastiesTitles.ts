/**
 * Get all dynasty titles from the server API
 *
 * @returns A Promise consisting of the API response
 */
async function getDynastiesTitles() {
	const BASE_URL = import.meta.env.VITE_BASE_SERVER_URI;

	try {
		// Fetch initial response
		const response = await fetch(
			`${BASE_URL}/dynasties/search/titles?include=id,slug,type`
		);

		// Check for response success
		if (!response.ok) {
			throw new Error('Error: Failed to fetch dynasty search titles');
		}

		const data = await response.json();

		return data?.data?.dynasties || [];
	} catch (e) {
		// Catch block: Return the error object itself
		return e;
	}
}

export default getDynastiesTitles;
