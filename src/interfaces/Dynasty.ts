import { Article } from './Article';
import { Description } from './Description';
import { FurtherReading } from './FurtherReading';

interface Dynasty {
	timeline: {
		begin: string;
		end: string;
	} | null;

	area?: {
		lowest: string;
		highest: string;
	} | null;

	description: Description | null;

	_id: string;
	slug: string;
	name: string;
	otherNames: string[];
	capitals: string[];
	locations: string[];
	population: string | null;

	languages?: string[];
	religions?: string[];
	rulers?: string[];
	currencies?: string[];
	wars?: string[];
	sources?: string[];
	articles?: Article[];
	furtherReading?: FurtherReading[];

	entity?: string;
	__v?: string;

	createdAt?: Date;
	updatedAt?: Date;
}

export type { Dynasty };
