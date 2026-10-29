interface NewRulerContributionForm {
	name: string;
	otherNames: string;
	born: string;
	died: string;
	dynasty: string;
	predecessor: string;
	successor: string;
	familyFather: string;
	familyMother: string;
	familyWives: string;
	familyChildren: string;
	religion: string;
	reignStart: string;
	reignEnd: string;
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

export type { NewRulerContributionForm };
