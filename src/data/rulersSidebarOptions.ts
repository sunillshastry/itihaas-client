import { SidebarSubfield } from '@/interfaces/SidebarSubfield';

const rulersSidebarOptions: SidebarSubfield[] = [
	{
		content: 'List All',
		id: 'ruler-list-all',
	},
	{
		content: 'By ID',
		id: 'get-ruler-by-id',
	},
	{
		content: 'By Slug',
		id: 'get-ruler-by-slug',
	},
	{
		content: 'Find Search Titles',
		id: 'get-ruler-search-titles',
	},
	{
		content: 'Random',
		id: 'get-random-ruler',
	},
	{
		content: 'Via Search Query',
		id: 'get-rulers-by-query',
	},
];

export default rulersSidebarOptions;
