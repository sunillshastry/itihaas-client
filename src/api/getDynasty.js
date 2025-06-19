/**
 * Get all dynasty from the server API
 *
 * @returns A Promise consisting of the API response
 */
async function getDynasty(slug) {
	const BASE_URL = import.meta.env.VITE_BASE_SERVER_URI;

	try {
		// Get the initial response
		const response = await fetch(`${BASE_URL}/dynasties/${slug}`);

		// Check for failed response
		if (!response.ok) {
			if (response.status === 404) {
				const error = new Error('Error: Page does not exist!');
				error.name = 'NotFoundError';

				throw error;
			}
			throw new Error('Error: Failed to fetch all dynasties');
		}

		// Retrieve the data from response.json and return the main content
		const data = await response.json();

		return data?.data?.dynasty;
	} catch (e) {
		// Catch block: return the error object itself
		return e;
	}
}

export default getDynasty;
