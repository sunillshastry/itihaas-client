import PropTypes from 'prop-types';
import QuickFactsDescription from './QuickFactsDescription';

function QuickFactsDescriptionContainer({ descriptionList }) {
	console.log(descriptionList);
	return (
		<section className="mt-10">
			{descriptionList &&
				descriptionList.map(function (description, i) {
					return (
						<QuickFactsDescription
							description={description}
							key={i}
						/>
					);
				})}
		</section>
	);
}

QuickFactsDescriptionContainer.propTypes = {
	descriptionList: PropTypes.array.isRequired,
};

export default QuickFactsDescriptionContainer;
