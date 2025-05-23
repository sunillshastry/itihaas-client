import PropTypes from 'prop-types';
import SubHeader from './SubHeader';
import PageLinkField from './PageLinkField';
import NoSectionDialog from './NoSectionDialog';

function FurtherReadingContainer({ readings }) {
	if (readings && readings.length === 0) {
		return <NoSectionDialog name="Further Readings" />;
	}
	return (
		<section className="mt-5">
			<SubHeader>Further Reading</SubHeader>
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
