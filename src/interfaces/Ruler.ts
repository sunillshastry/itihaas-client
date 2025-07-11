import { Article } from './Article';
import { Description } from './Description';
import { FurtherReading } from './FurtherReading';

interface Ruler {
	timeline: {
		begin: string;
		end: string;
	} | null;

	_id: string;
	slug: string;
	name: string;
	otherNames: string[];
	born: string;
	died: string;
	dynasty: string;

	entity?: string;
	family?: {
		father: string;
		mother: string;
		children: string[];
		wives: string[];
	} | null;
	description: Description | null;

	religion?: string;
	predecessor?: string;
	successor?: string;

	wars?: string[];
	sources?: string[];

	furtherReading?: FurtherReading[];

	articles?: Article[];

	createdAt?: Date;
	updatedAt?: Date;

	__v?: string;
}

export type { Ruler };
