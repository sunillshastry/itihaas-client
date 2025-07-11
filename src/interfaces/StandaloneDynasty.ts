import { Article } from './Article';
import { Description } from './Description';
import { FurtherReading } from './FurtherReading';

interface StandaloneDynasty {
	timeline: {
		begin: string;
		end: string;
	} | null;

	area: {
		lowest: string;
		highest: string;
	} | null;

	description: Description | null;

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

	furtherReading: FurtherReading[];

	articles: Article[];

	entity?: string;

	createdAt: Date;
	updatedAt: Date;
	__v?: number;
}

export type { StandaloneDynasty };
