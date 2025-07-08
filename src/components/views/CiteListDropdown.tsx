import PropTypes from 'prop-types';
import Select from 'react-select';

import dropdownOptions from '@/data/citationOptions';
import { useCitation } from '@/context/CitationContext';

function CiteListDropdown({ onChange }) {
	const { format } = useCitation();

	const defaultOption = dropdownOptions.filter(
		(option) => option.value === format
	);

	return (
		<Select
			onChange={onChange}
			options={dropdownOptions}
			defaultValue={defaultOption.at(0) || dropdownOptions[2]}
			styles={{
				control: (base, state) => ({
					...base,
					border: '1px solid #855e3f',
					outline: state.isFocused ? '2px solid #855e3f' : '',
				}),
				option: (base, state) => ({
					...base,
					color: state.isSelected
						? '#dfd2c8'
						: state.isFocused
							? '#dfd2c8'
							: '#855e3f',
					backgroundColor: state.isSelected
						? '#4a3423'
						: state.isFocused
							? '#9f7759'
							: 'transparent',
					fontWeight: '500',
					cursor: 'pointer',
				}),
			}}
		/>
	);
}

CiteListDropdown.propTypes = {
	onChange: PropTypes.func.isRequired,
};

export default CiteListDropdown;
