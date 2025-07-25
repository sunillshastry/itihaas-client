import { APAFormat } from '@/interfaces/citations/APAFormat';
import { ChicagoFormat } from '@/interfaces/citations/ChicagoFormat';
import { HarvardFormat } from '@/interfaces/citations/HarvardFormat';
import { MLAFormat } from '@/interfaces/citations/MLAFormat';

/**
 * Service class to retrieve custom formatted citation using popular style guides
 */
class Citations {
	/**
	 * Get formatted citation in the MLA format style guide
	 *
	 * @param {object} details Includes various information about the page/site/source
	 * @returns The MLA formatted citation
	 */
	static getMLAFormat({ page, updated, url, accessed }: MLAFormat) {
		return `Itihaas. “Itihaas | ${page} | The Front Page of Indian History.” Itihaas, last updated ${updated}, ${url}. Accessed ${accessed}`;
	}

	/**
	 * Get formatted citation in the APA format style guide
	 *
	 * @param {object} details Includes various information about the page/site/source
	 * @returns The APA formatted citation
	 */
	static getAPAFormat({ year, date, page, url }: APAFormat) {
		return `Itihaas. (${year}, ${date}). Itihaas | ${page} | The Front Page of Indian History. Itihaas. ${url}`;
	}

	/**
	 * Get formatted citation in the Harvard format style guide
	 *
	 * @param {object} details Includes various information about the page/site/source
	 * @returns The Harvard formatted citation
	 */
	static getHarvardFormat({ page, updated, url, accessed }: HarvardFormat) {
		return `Itihaas, 2025. Itihaas | ${page} | The Front Page of Indian History. Itihaas, last updated ${updated}. Available at: ${url} (Accessed: ${accessed}).`;
	}

	/**
	 * Get formatted citation in the Chicago format style guide
	 *
	 * @param {object} details Includes various information about the page/site/source
	 * @returns The Chicago formatted citation
	 */
	static getChicagoFormat({ page, updated, url }: ChicagoFormat) {
		return `Itihaas. 2025. "Itihaas | ${page} | The Front Page of Indian History." Itihaas. Last modified ${updated}. ${url}.`;
	}
}

export default Citations;
