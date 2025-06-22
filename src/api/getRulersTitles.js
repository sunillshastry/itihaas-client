/**
 * Get all ruler titles from the server API
 *
 * @returns A Promise consisting of the API response
 */
async function getRulersTitles() {
	const BASE_URL = import.meta.env.VITE_BASE_SERVER_URI;

	try {
		// Fetch initial response
		const response = await fetch(
			`${BASE_URL}/rulers/search/titles?include=id,slug,type`
		);

		// Check for failed response
		if (!response.ok) {
			throw new Error('Error: Failed to fetch ruler search titles');
		}

		const data = await response.json();

		return data?.data?.rulers || [];
	} catch (e) {
		// Catch block: Return the error object itself
		return e;
	}
}

export default getRulersTitles;
