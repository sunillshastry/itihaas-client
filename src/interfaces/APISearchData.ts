import { SearchTitle } from './SearchTitle';

type ValidKeys = 'dynasties' | 'rulers';

interface SearchData {
	success: boolean;
	size: number;
	data: {
		[Key in ValidKeys]?: string[] | SearchTitle[];
	};
}

export type { SearchData };
