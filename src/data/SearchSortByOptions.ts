import { SelectBlueprint } from '@/interfaces/SelectBlueprint';

const SearchSortByOptions: SelectBlueprint[] = [
	{
		value: 'alphabetical-a-z',
		label: 'Alphabetical (A-Z)',
	},
	{
		value: 'alphabetical-z-a',
		label: 'Alphabetical (Z-A)',
	},
	{
		value: 'chronological',
		label: 'Chronologically',
	},
	{
		value: 'last-updated',
		label: 'Last Updated',
	},
	{
		value: 'created',
		label: 'Created Date',
	},
];

export default SearchSortByOptions;
