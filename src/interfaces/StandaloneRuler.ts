import { Article } from './Article';
import { Description } from './Description';
import { FurtherReading } from './FurtherReading';

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

	description: Description | null;

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

	furtherReading: FurtherReading[];

	articles: Article[];

	createdAt: Date;
	updatedAt: Date;

	entity?: string;

	__v?: string;
}

export type { StandaloneRuler };
