import PropTypes from 'prop-types';
import Description from './Description';
import NoDescriptionDialog from './NoDescriptionDialog';

function DescriptionContainer({ descriptionList }) {
	if (descriptionList && descriptionList.length === 0) {
		return <NoDescriptionDialog />;
	}

	return (
		<section className="mt-10">
			{descriptionList &&
				descriptionList.map(function (description, i) {
					return (
						<Description
							description={description}
							key={i}
						/>
					);
				})}
		</section>
	);
}

DescriptionContainer.propTypes = {
	descriptionList: PropTypes.array.isRequired,
};

export default DescriptionContainer;
