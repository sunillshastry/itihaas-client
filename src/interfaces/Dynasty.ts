interface Dynasty {
	timeline: {
		begin: string;
		end: string;
	} | null;

	description: {
		oneline: string | null;
	};

	_id: string;
	slug: string;
	name: string;
	otherNames: string[];
	capitals: string[];
	locations: string[];
	population: string | null;

	entity?: string;
	__v?: string;
}

export type { Dynasty };
