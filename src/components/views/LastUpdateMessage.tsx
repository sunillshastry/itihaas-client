import { SquarePen } from 'lucide-react';
import PropTypes from 'prop-types';

import useUpdateDate from '@/hooks/useUpdateDate';

interface FunctionProps {
	date: Date | undefined;
}

function LastUpdateMessage({ date }: FunctionProps) {
	const dateString = useUpdateDate(date as Date);

	return (
		<p className="text-primary-400 my-5 flex items-center text-sm font-semibold italic">
			<span>
				<SquarePen size={14} />
			</span>
			<span className="ml-1.5">Last updated on {dateString}</span>
		</p>
	);
}

LastUpdateMessage.propTypes = {
	date: PropTypes.string.isRequired,
};

export default LastUpdateMessage;
