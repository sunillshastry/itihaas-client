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
 * Custom type defined that supports a 2-sized tuple of type 'number' and 'string' in the respective order
 * Defined and used locally within the present module file
 */
type FuncReturnType = [number, string];

/**
 * Convert 24 hour value to its 12 hour equivalent
 *
 * @param {number} hours The 24-hour value
 * @returns The twelve hour equivalent of a 24-hour value
 */
function convertToTwelveHours(hours: number): FuncReturnType {
	const time: FuncReturnType = [0, ''];
	const meridian = hours >= 12 ? 'PM' : 'AM';

	time[1] = meridian;
	time[0] = hours % 12;
	time[0] = time[0] === 0 ? 12 : time[0];

	return time;
}

export default convertToTwelveHours;
