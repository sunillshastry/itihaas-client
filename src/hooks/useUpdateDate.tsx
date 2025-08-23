import convertToTwelveHours from '@/utils/convertToTwelveHours';
import formattedMonthName from '@/utils/formattedMonthName';

function useUpdateDate(date: Date | string | null | undefined) {
	if (!date) return 'Unknown';

	const newDate = new Date(date);
	if (isNaN(newDate.getTime())) return 'Unknown';

	const rawMonth = newDate.getUTCMonth() + 1;
	const rawHour = newDate.getUTCHours();

	const updatedDate = newDate.getUTCDate();
	const year = newDate.getUTCFullYear();
	const hours = convertToTwelveHours(rawHour);
	const minutes = newDate.getUTCMinutes();
	const month = formattedMonthName(rawMonth);

	return `${month} ${updatedDate}, ${year} at ${
		hours[0] < 10 ? `0${hours[0]}` : hours[0]
	}:${minutes < 10 ? `0${minutes}` : minutes} ${hours[1]} UTC`;
}

export default useUpdateDate;
