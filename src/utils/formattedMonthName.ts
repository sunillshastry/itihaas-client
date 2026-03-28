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
 * Get month string value via its numeric value
 *
 * @param {number} month The month value in its number format
 * @returns The equivalent string value for the month provided
 */
function formattedMonthName(month: number): string {
	// List of all possible months
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	if (month >= 1 && month <= 12) {
		return months[month - 1];
	}

	// Invalid index
	return '';
}

export default formattedMonthName;
