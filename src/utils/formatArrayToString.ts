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
 * Converts all items in an array into a single, formatted string value
 *
 * @param {array} array A list of arrays
 * @typeParam T - any generic type recognized by TypeScript (number, string, boolean, etc)
 * @returns Combined values of the array as a single string
 */
function formatArrayToString<T>(array: T[]) {
	return array.join(', ');
}

export default formatArrayToString;
