/**
 * Set the title of the window document
 *
 * @param {function} setTitle A useState function to set the title state
 * @param {string} name Name of the page/entity that must be set in the title field
 */
function updateWindowTitle(setTitle, name) {
	setTitle(`Itihaas | ${name} | The Front Page of Indian History`);
}

export default updateWindowTitle;
