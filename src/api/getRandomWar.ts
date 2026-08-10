import { Data } from '@/interfaces/APIData';

/**
 * Retrieve a random war entity from the backend API with error handling
 * @returns The API response data from the backend
 */
export default async function getRandomWar() {
	let BASE_URL;
	if (import.meta.env.VITE_APP_ENV === 'development') {
		BASE_URL = import.meta.env.VITE_BASE_SERVER_URI;
	} else {
		BASE_URL = import.meta.env.VITE_BASE_PROD_URI;
	}

	if (!BASE_URL) return;

	try {
		// Get the initial response
		const response: Response = await fetch(`${BASE_URL}/wars/random`);

		// Check for failed response
		if (!response.ok) {
			throw new Error('Error: Failed to fetch random dynasty');
		}

		// Retrieve the data from response.json and return the main content
		const data: Data = await response.json();
		return data?.data?.war;
	} catch (e) {
		// Catch block: return the error object itself
		if (e instanceof Error) return e;
	}
}
