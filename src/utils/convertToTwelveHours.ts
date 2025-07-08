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
