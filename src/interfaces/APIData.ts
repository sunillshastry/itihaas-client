import { ValidKeys } from '@/types/APISearchDataValidKeys';
import { Dynasty } from './Dynasty';
import { Ruler } from './Ruler';

interface DataValue {
	dynasties?: Dynasty[];
	dynasty?: Dynasty;

	ruler?: Ruler;
	rulers?: Ruler[];
}

interface Data {
	success: boolean;
	size?: number;
	data: DataValue;
	entity?: ValidKeys;
}

export type { Data };
