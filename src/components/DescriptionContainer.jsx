import PropTypes from 'prop-types';
import Description from './Description';

function DescriptionContainer({ descriptionList }) {
	console.log(descriptionList);
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
