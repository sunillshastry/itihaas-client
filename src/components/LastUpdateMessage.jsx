import { SquarePen } from 'lucide-react';
import PropTypes from 'prop-types';
import formattedMonthName from '../utils/formattedMonthName';
import convertToTwelveHours from '../utils/convertToTwelveHours';

function LastUpdateMessage({ date }) {
	const updated = new Date(date);
	const unformattedMonth = updated.getUTCMonth() + 1;
	const unformattedHour = updated.getUTCHours();

	const updatedDate = updated.getUTCDate();
	const year = updated.getUTCFullYear();
	const hours = convertToTwelveHours(unformattedHour);
	const minutes = updated.getUTCMinutes();
	const month = formattedMonthName(unformattedMonth);

	return (
		<p className="text-primary-400 my-5 flex items-center text-sm font-semibold italic">
			<span>
				<SquarePen size={14} />
			</span>
			<span className="ml-1.5">
				Last updated on {month} {updatedDate}, {year} at{' '}
				{hours[0] < 10 ? `0${hours[0]}` : hours[0]}:{minutes} {hours[1]} UTC
			</span>
		</p>
	);
}

LastUpdateMessage.propTypes = {
	date: PropTypes.string.isRequired,
};

export default LastUpdateMessage;
