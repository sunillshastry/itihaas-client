import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

import Description from '@/components/views/Description';
import NoDescriptionDialog from '@/components/views/NoDescriptionDialog';

interface FunctionProps {
	descriptionList: string[];
}

function DescriptionContainer({ descriptionList }: FunctionProps) {
	if (descriptionList && descriptionList.length === 0) {
		return <NoDescriptionDialog />;
	}

	return (
		<section className="mt-10">
			{descriptionList &&
				descriptionList.map(function (description) {
					return (
						<Description
							description={description}
							key={uuid()}
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
