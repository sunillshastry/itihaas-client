import { ValidKeys } from '@/types/APISearchDataValidKeys';
import { Dynasty } from './Dynasty';
import { Ruler } from './Ruler';
import { War } from './War';

interface DataValue {
	dynasties?: Dynasty[];
	dynasty?: Dynasty;

	ruler?: Ruler;
	rulers?: Ruler[];

	war?: War;
	wars: War[];
}

interface Data {
	success: boolean;
	size?: number;
	data: DataValue;
	entity?: ValidKeys;
}

export type { Data };
