interface StandaloneDynasty {
	timeline: {
		begin: string;
		end: string;
	} | null;

	area: {
		lowest: string;
		highest: string;
	} | null;

	description: {
		oneline: string | null;
		long: string[] | null;
	} | null;

	_id: string;
	slug: string;
	name: string;
	otherNames: string[];
	capitals: string[];
	languages: string[];
	religions: string[];
	rulers: string[];
	population: string | null;
	currencies: string[];
	wars: string[];
	locations: string[];
	sources: string[];

	furtherReading: [
		{
			publisher: string;
			link: string;
			_id: string;
		},
	];

	articles: [
		{
			title: string;
			authors: string[];
			publisher: string;
			_id: string;
		},
	];

	createdAt: Date;
	updatedAt: Date;
}

export type { StandaloneDynasty };
