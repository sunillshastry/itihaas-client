import { SelectBlueprint } from '@/interfaces/SelectBlueprint';

const SearchFilterByOptions: SelectBlueprint[] = [
	{
		value: 'dynasty',
		label: 'Dynasties',
	},
	{
		value: 'ruler',
		label: 'Rulers',
	},
	{
		value: 'war',
		label: 'Wars',
	},
	{
		value: 'none',
		label: 'None',
	},
];

export default SearchFilterByOptions;
