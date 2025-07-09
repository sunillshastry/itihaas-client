import { Dynasty } from './Dynasty';
import { StandaloneDynasty } from './StandaloneDynasty';
import { StandaloneRuler } from './StandaloneRuler';

interface DataValue {
	dynasties?: Dynasty[];

	dynasty?: StandaloneDynasty;

	ruler?: StandaloneRuler;
	// rulers?: null;
}

interface Data {
	success: boolean;
	size?: number;
	data: DataValue;
}

export type { Data };
