import getDynastyByQuery from './getDynastyByQuery';
import getRulerByQuery from './getRulerByQuery';
import { Ruler } from '@/interfaces/Ruler';
import { Dynasty } from '@/interfaces/Dynasty';

async function getQueryResults(query: string) {
	try {
		// Dynasty fetch responses
		const dynastyResponse = (await getDynastyByQuery(query)) as Dynasty[];

		// Ruler fetch response
		const rulerResponse = (await getRulerByQuery(query)) as Ruler[];

		// Combine both response into one single array and return the result
		const searchResults = [...dynastyResponse, ...rulerResponse];

		return searchResults;
	} catch (e) {
		if (e instanceof Error) return e;
	}
}

export default getQueryResults;
