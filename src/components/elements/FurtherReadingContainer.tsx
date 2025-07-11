import PropTypes from 'prop-types';

import SubHeader from '@/components/elements/SubHeader';
import PageLinkField from '@/components/views/PageLinkField';
import NoSectionDialog from '@/components/views/NoSectionDialog';
import SubHeaderLink from '../views/SubHeaderLink';
import { FurtherReading } from '@/interfaces/FurtherReading';

interface FunctionProps {
	readings: FurtherReading[] | undefined;
}

function FurtherReadingContainer({ readings }: FunctionProps) {
	if (readings && readings.length === 0) {
		return <NoSectionDialog name="Further Readings" />;
	}

	return (
		<section className="mt-5">
			<SubHeader>
				<SubHeaderLink to="#reading">Further Readings</SubHeaderLink>
			</SubHeader>
			<div className="mt-3 flex flex-col items-start justify-start">
				{readings &&
					readings.map(function (reading) {
						return (
							<PageLinkField
								key={reading._id}
								className="my-1"
								native={true}
								to={reading.link}
							>
								{reading.publisher}
							</PageLinkField>
						);
					})}
			</div>
		</section>
	);
}

FurtherReadingContainer.propTypes = {
	readings: PropTypes.array.isRequired,
};

export default FurtherReadingContainer;
