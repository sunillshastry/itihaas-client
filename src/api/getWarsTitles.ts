import { SearchData } from '@/interfaces/APISearchData';
import { SearchTitle } from '@/interfaces/SearchTitle';

/**
 * Get all ruler titles from the server API
 *
 * @returns A Promise consisting of the API response
 */
export default async function getWarsTitles(): Promise<
	SearchTitle[] | string[] | Error | undefined
> {
	let BASE_URL;
	if (import.meta.env.VITE_APP_ENV === 'development') {
		BASE_URL = import.meta.env.VITE_BASE_SERVER_URI;
	} else {
		BASE_URL = import.meta.env.VITE_BASE_PROD_URI;
	}

	if (!BASE_URL) return;

	try {
		// Fetch initial response
		const response: Response = await fetch(
			`${BASE_URL}/wars/search/titles?include=id,slug,type`
		);

		// Check for failed response
		if (!response.ok) {
			throw new Error('Error: Failed to fetch ruler search titles');
		}

		const data: SearchData = await response.json();

		return data?.data?.wars || [];
	} catch (e) {
		// Catch block: Return the error object itself
		if (e instanceof Error) return e;
	}
}
