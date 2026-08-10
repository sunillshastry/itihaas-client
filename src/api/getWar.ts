import { Data } from '@/interfaces/APIData';

/**
 * Get one war using slug from the server API
 *
 * @returns A Promise consisting of the API response
 */
export default async function getWar(slug: string) {
	let BASE_URL;
	if (import.meta.env.VITE_APP_ENV === 'development') {
		BASE_URL = import.meta.env.VITE_BASE_SERVER_URI;
	} else {
		BASE_URL = import.meta.env.VITE_BASE_PROD_URI;
	}

	if (!BASE_URL) return;

	try {
		// Get the initial response
		const response: Response = await fetch(`${BASE_URL}/wars/${slug}`);

		// Check for failed response
		if (!response.ok) {
			if (response.status === 404) {
				const error = new Error('Error: Page does not exist!');
				error.name = 'NotFoundError';

				throw error;
			}
			throw new Error('Error: Failed to fetch dynasty');
		}

		// Retrieve the data from response.json and return the main content
		const data: Data = await response.json();
		return data?.data?.war;
	} catch (e) {
		// Catch block: return the error object itself
		if (e instanceof Error) return e;
	}
}
