import { ValidKeys } from '@/types/APISearchDataValidKeys';
import { SearchTitle } from './SearchTitle';

interface SearchData {
	success: boolean;
	size: number;
	data: {
		[Key in ValidKeys]?: string[] | SearchTitle[];
	};
}

export type { SearchData };
