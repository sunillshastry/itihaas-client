function convertToTwelveHours(hours) {
	const time = ['', ''];
	const meridian = hours >= 12 ? 'PM' : 'AM';
	time[1] = meridian;
	time[0] = hours % 12;
	time[0] = time[0] === 0 ? 12 : time[0];

	return time;
}

export default convertToTwelveHours;
