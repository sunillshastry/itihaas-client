class Citations {
	static getMLAFormat({ page, updated, url, accessed }) {
		return `Itihaas. “Itihaas | ${page} | The Front Page of Indian History.” Itihaas, last updated ${updated}, ${url}. Accessed ${accessed}`;
	}

	static getAPAFormat() {
		return '';
	}

	static getHarvardFormat() {
		return '';
	}

	static getChicagoFormat() {
		return '';
	}
}

export default Citations;
