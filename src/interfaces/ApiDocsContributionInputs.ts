interface ApiDocsContributionInputs {
	subject: string;
	description: string;
	fixComments: string;
	additionalComments: string;

	// User info
	userName: string;
	userLocation: string;
	userEmail: string;
}

export type { ApiDocsContributionInputs };
