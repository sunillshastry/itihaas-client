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
	static getMLAFormat({ page, updated, url, accessed }) {
		return `Itihaas. “Itihaas | ${page} | The Front Page of Indian History.” Itihaas, last updated ${updated}, ${url}. Accessed ${accessed}`;
	}

	/**
	 * Get formatted citation in the APA format style guide
	 *
	 * @param {object} details Includes various information about the page/site/source
	 * @returns The APA formatted citation
	 */
	static getAPAFormat() {
		return '';
	}

	/**
	 * Get formatted citation in the Harvard format style guide
	 *
	 * @param {object} details Includes various information about the page/site/source
	 * @returns The Harvard formatted citation
	 */
	static getHarvardFormat() {
		return '';
	}

	/**
	 * Get formatted citation in the Chicago format style guide
	 *
	 * @param {object} details Includes various information about the page/site/source
	 * @returns The Chicago formatted citation
	 */
	static getChicagoFormat() {
		return '';
	}
}

export default Citations;
