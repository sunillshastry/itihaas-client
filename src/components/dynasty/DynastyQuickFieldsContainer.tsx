import PropTypes from 'prop-types';

import formatArrayToString from '@/utils/formatArrayToString';
import QuickFactField from '@/components/views/QuickFactField';
import QuickFactsNoField from '@/components/views/QuickFactsNoField';
import { StandaloneDynasty } from '@/interfaces/StandaloneDynasty';

interface FunctionProps {
	dynasty: StandaloneDynasty;
}

function DynastyQuickFieldsContainer({ dynasty }: FunctionProps) {
	return (
		<>
			<QuickFactField
				title="capital"
				content={
					(dynasty?.capitals && formatArrayToString(dynasty?.capitals)) || (
						<QuickFactsNoField />
					)
				}
			/>

			<QuickFactField
				title="currencies"
				content={
					(dynasty?.currencies && formatArrayToString(dynasty?.currencies)) || (
						<QuickFactsNoField />
					)
				}
			/>

			<QuickFactField
				title="locations"
				content={
					(dynasty?.locations && formatArrayToString(dynasty?.locations)) || (
						<QuickFactsNoField />
					)
				}
			/>

			<QuickFactField
				title="languages"
				content={
					(dynasty?.languages && formatArrayToString(dynasty?.languages)) || (
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
					(dynasty?.religions && formatArrayToString(dynasty?.religions)) || (
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
