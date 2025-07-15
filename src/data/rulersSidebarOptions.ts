import { SidebarSubfield } from '@/interfaces/SidebarSubfield';

const rulersSidebarOptions: SidebarSubfield[] = [
	{
		content: 'List All',
		id: 'ruler-list-all',
	},
	{
		content: 'By ID',
		id: 'get-ruler-id',
	},
	{
		content: 'By Slug',
		id: 'get-ruler-slug',
	},
	{
		content: 'Find Search Titles',
		id: 'ruler-search-titles',
	},
	{
		content: 'Random',
		id: 'ruler-random',
	},
	{
		content: 'Via Search Query',
		id: 'ruler-search',
	},
];

export default rulersSidebarOptions;
