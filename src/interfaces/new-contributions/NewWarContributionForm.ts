interface NewWarContributionForm {
	name: string;
	otherNames: string;
	begin: string;
	end: string;
	winners: string;
	losers: string;
	casualties: string;
	locations: string;
	leadersA: string;
	leadersB: string;
	causes: string;
	descShort: string;
	descLong: string;
	sources: string;
	readings: string;
	articles: string;
	comments: string;

	// User info
	userFullName: string;
	userLocation: string;
	userEmail: string;
}

export type { NewWarContributionForm };
