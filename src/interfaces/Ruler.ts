interface Ruler {
	timeline: {
		begin: string;
		end: string;
	} | null;

	description: {
		oneline: string;
	};

	_id: string;
	slug: string;
	name: string;
	otherNames: string[];
	born: string;
	died: string;
	dynasty: string;

	entity?: string;

	__v?: string;
}

export type { Ruler };
