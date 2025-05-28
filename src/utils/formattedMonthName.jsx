/**
 * Get month string value via its numeric value
 *
 * @param {number} month The month value in its number format
 * @returns The equivalent string value for the month provided
 */
function formattedMonthName(month) {
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
