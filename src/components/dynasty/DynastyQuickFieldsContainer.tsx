import PropTypes from 'prop-types';

import formatArrayToString from '@/utils/formatArrayToString';
import QuickFactField from '@/components/views/QuickFactField';
import QuickFactsNoField from '@/components/views/QuickFactsNoField';
import { Dynasty } from '@/interfaces/Dynasty';

interface FunctionProps {
	dynasty: Dynasty;
}

function DynastyQuickFieldsContainer({ dynasty }: FunctionProps) {
	return (
		<>
			<QuickFactField
				title="capital"
				content={
					(dynasty?.capitals &&
						formatArrayToString<string>(dynasty?.capitals)) || (
						<QuickFactsNoField />
					)
				}
			/>

			<QuickFactField
				title="currencies"
				content={
					(dynasty?.currencies &&
						formatArrayToString<string>(dynasty?.currencies)) || (
						<QuickFactsNoField />
					)
				}
			/>

			<QuickFactField
				title="locations"
				content={
					(dynasty?.locations &&
						formatArrayToString<string>(dynasty?.locations)) || (
						<QuickFactsNoField />
					)
				}
			/>

			<QuickFactField
				title="languages"
				content={
					(dynasty?.languages &&
						formatArrayToString<string>(dynasty?.languages)) || (
						<QuickFactsNoField />
					)
				}
			/>

			<QuickFactField
				title="population"
				content={dynasty?.population || <QuickFactsNoField />}
			/>

			<QuickFactField
				title="area"
				content={
					(dynasty?.area &&
						`${dynasty?.area?.lowest} to ${dynasty?.area?.highest}`) || (
						<QuickFactsNoField />
					)
				}
			/>

			<QuickFactField
				title="religions"
				content={
					(dynasty?.religions &&
						formatArrayToString<string>(dynasty?.religions)) || (
						<QuickFactsNoField />
					)
				}
			/>
		</>
	);
}

DynastyQuickFieldsContainer.propTypes = {
	dynasty: PropTypes.object.isRequired,
};

export default DynastyQuickFieldsContainer;
