type ValidKeys = 'dynasties' | 'rulers';

interface SearchData {
	success: boolean;
	size: number;
	data: {
		[Key in ValidKeys]?: string[];
	};
}

export type { SearchData };
