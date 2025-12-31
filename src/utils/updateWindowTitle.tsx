/**
 * Copyright (C) 2025 Itihaas | Sunil Shastry
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version
 *
 * To view full licensing and usage information, visit: https://github.com/sunillshastry/itihaas-api/blob/master/LICENSE
 */

/**
 * Set the title of the window document
 *
 * @param {function} setTitle A useState function to set the title state
 * @param {string} name Name of the page/entity that must be set in the title field
 */
function updateWindowTitle(
	setTitle: React.Dispatch<React.SetStateAction<string>>,
	name: string
): void {
	setTitle(`Itihaas | ${name} | The Front Page of Indian History`);
}

export default updateWindowTitle;
