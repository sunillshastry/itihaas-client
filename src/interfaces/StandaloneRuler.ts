interface StandaloneRuler {
	family: {
		father: string;
		mother: string;
		children: string[];
		wives: string[];
	} | null;

	timeline: {
		begin: string;
		end: string;
	} | null;

	description: {
		oneline: string;
		long: string[];
	} | null;

	_id: string;
	slug: string;
	name: string;

	otherNames: string[];
	born: string;
	died: string;

	dynasty: string;
	religion: string;
	predecessor: string;
	successor: string;

	wars: string[];
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
			link: string;
			_id: string;
		},
	];

	createdAt: Date;
	updatedAt: Date;
}

export type { StandaloneRuler };
