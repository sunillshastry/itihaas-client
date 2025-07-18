import PropTypes from 'prop-types';

import QuickFactField from '@/components/views/QuickFactField';
import QuickFactsNoField from '@/components/views/QuickFactsNoField';
import { Ruler } from '@/interfaces/Ruler';
import RulerFamilyField from './RulerFamilyField';

interface FunctionProps {
	ruler: Ruler;
}

function RulerQuickFieldsContainer({ ruler }: FunctionProps) {
	return (
		<>
			<QuickFactField
				title="dynasty"
				content={ruler?.dynasty ? ruler?.dynasty : <QuickFactsNoField />}
			/>

			<QuickFactField
				title="predecessor"
				content={ruler?.predecessor ? ruler.predecessor : <QuickFactsNoField />}
			/>

			<QuickFactField
				title="family"
				content={
					ruler?.family ? (
						<RulerFamilyField family={ruler?.family} />
					) : (
						<QuickFactsNoField />
					)
				}
			/>
			<QuickFactField
				title="religion"
				content={ruler?.religion ? ruler.religion : <QuickFactsNoField />}
			/>
			<QuickFactField
				title="successor"
				content={ruler?.successor ? ruler.successor : <QuickFactsNoField />}
			/>
			<QuickFactField
				title="reign"
				content={
					ruler?.timeline?.begin ? ruler.timeline.begin : <QuickFactsNoField />
				}
			/>
			<QuickFactField
				title="reign end"
				content={
					ruler?.timeline?.end ? ruler.timeline.end : <QuickFactsNoField />
				}
			/>
		</>
	);
}

RulerQuickFieldsContainer.propTypes = {
	ruler: PropTypes.object.isRequired,
};

export default RulerQuickFieldsContainer;
