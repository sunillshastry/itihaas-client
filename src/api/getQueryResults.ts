import getDynastyByQuery from './getDynastyByQuery';
import getRulerByQuery from './getRulerByQuery';
import { Ruler } from '@/interfaces/Ruler';
import { Dynasty } from '@/interfaces/Dynasty';
import getWarByQuery from './getWarByQuery';
import { War } from '@/interfaces/War';

async function getQueryResults(query: string) {
	try {
		// Dynasty fetch responses
		const dynastyResponse = (await getDynastyByQuery(query)) as Dynasty[];

		// Ruler fetch response
		const rulerResponse = (await getRulerByQuery(query)) as Ruler[];

		const warResponse = (await getWarByQuery(query)) as War[];

		// Combine all responses into one single array and return the result
		const searchResults = [
			...dynastyResponse,
			...rulerResponse,
			...warResponse,
		];

		return searchResults;
	} catch (e) {
		if (e instanceof Error) return e;
	}
}

export default getQueryResults;
