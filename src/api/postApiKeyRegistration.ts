interface Data {
	name: string;
	privacyAgreement: boolean;
	captcha: string;
	email: string;
	usageReason: string;
}

export default async function postApiKeyRegistration(data: Data) {
	try {
		let BASE_URL;
		if (import.meta.env.VITE_APP_ENV === 'development') {
			BASE_URL = import.meta.env.VITE_BASE_SERVER_URI;
		} else {
			BASE_URL = import.meta.env.VITE_BASE_PROD_URI;
		}

		if (!BASE_URL) return;

		const response: Response = await fetch(`${BASE_URL}/users/register`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		if (!response.ok)
			throw new Error(
				'Error: There was an issue while submitting new user registration'
			);

		const requestedData = await response.json();
		return requestedData;
	} catch (e) {
		// Catch block: return the error object itself
		if (e instanceof Error) return e;
	}
}
