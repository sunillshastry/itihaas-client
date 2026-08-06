import { Article } from './Article';
import { Description } from './Description';
import { FurtherReading } from './FurtherReading';
import { WarBelligerentsType } from './WarBelligerentsType';

interface War {
	timeline: {
		begin: string;
		end: string;
	} | null;

	_id: string;
	name: string;
	slug: string;
	otherNames: string[];
	outcome: {
		result: string;
		winners: string[];
		losers: string[];
	};
	casualties: {
		sideA: null | string;
		sideB: null | string;
		notes: string;
	};
	description: Description | null;

	type: string;
	locations?: string[];
	belligerents: WarBelligerentsType[];
	causes?: string[];
	relatedDynasties?: string[];
	relatedRulers?: string[];
	relatedWars?: string[];

	sources?: string[];
	furtherReading?: FurtherReading[];
	articles?: Article[];

	createdAt?: Date | string;
	updatedAt?: Date | string;

	__v?: string;
}

export type { War };
