/**
 * Converts all items in an array into a single, formatted string value
 *
 * @param {array} array A list of arrays
 * @returns Combined values of the array as a single string
 */
function formatArrayToString<T>(array: T[]) {
	return array.join(', ');
}

export default formatArrayToString;
