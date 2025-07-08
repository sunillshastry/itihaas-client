import { StandaloneDynasty } from './StandaloneDynasty';

type ValidKeys = 'dynasties' | 'dynasty' | 'rulers' | 'ruler';

interface Data {
	success: boolean;
	data: {
		[Key in ValidKeys]?: StandaloneDynasty;
	};
}

export type { Data };
