import { Dynasty } from './Dynasty';
import { StandaloneDynasty } from './StandaloneDynasty';

type ValidKeys = 'dynasties' | 'dynasty' | 'rulers' | 'ruler';

interface Data {
	success: boolean;
	data: {
		[Key in ValidKeys]?: StandaloneDynasty | Dynasty[];
	};
}

export type { Data };
