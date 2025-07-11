import convertToTwelveHours from '@/utils/convertToTwelveHours';
import formattedMonthName from '@/utils/formattedMonthName';
import { useState } from 'react';

function useUpdateDate(date: Date | string) {
	const [newDate] = useState(new Date(date));

	const rawMonth = newDate.getUTCMonth() + 1;
	const rawHour = newDate.getUTCHours();

	const updatedDate = newDate.getUTCDate();
	const year = newDate.getUTCFullYear();
	const hours = convertToTwelveHours(rawHour);
	const minutes = newDate.getUTCMinutes();
	const month = formattedMonthName(rawMonth);

	return `${month} ${updatedDate}, ${year} at ${hours[0] < 10 ? `0${hours[0]}` : hours[0]}:${minutes} ${hours[1]} UTC`;
}

export default useUpdateDate;
