import { Data } from '@/interfaces/APIData';

/**
 * Get all wars from the server API
 *
 * @returns A Promise consisting of the API response
 */
export default async function getWars() {
	let BASE_URL;

	if (import.meta.env.VITE_APP_ENV === 'development') {
		BASE_URL = import.meta.env.VITE_BASE_SERVER_URI;
	} else {
		BASE_URL = import.meta.env.VITE_BASE_PROD_URI;
	}

	if (!BASE_URL) return;

	try {
		// Get the initial response
		const response: Response = await fetch(`${BASE_URL}/wars`);

		// Check if the response fetch was failed
		if (!response.ok) {
			throw new Error('Error: Failed to fetch all wars');
		}

		// Retrieve the data from the response.json and return the formatted main content
		const data: Data = await response.json();
		return data?.data?.wars;
	} catch (e) {
		if (e instanceof Error) return e;
	}
}
