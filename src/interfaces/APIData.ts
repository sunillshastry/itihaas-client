import { Dynasty } from './Dynasty';
import { StandaloneDynasty } from './StandaloneDynasty';

interface DataValue {
	dynasties?: Dynasty[];

	dynasty?: StandaloneDynasty;

	// rulers?: null;
	// ruler?: null;
}

interface Data {
	success: boolean;
	size?: number;
	data: DataValue;
}

export type { Data };
