import { SidebarSubfield } from '@/interfaces/SidebarSubfield';

const dynastiesSidebarOptions: SidebarSubfield[] = [
	{
		content: 'List All',
		id: 'dynasty-list-all',
	},
	{
		content: 'By ID',
		id: 'get-dynasty-by-id',
	},
	{
		content: 'By Slug',
		id: 'get-dynasty-by-slug',
	},
	{
		content: 'Find Search Titles',
		id: 'get-dynasty-search-titles',
	},
	{
		content: 'Random',
		id: 'get-random-dynasty',
	},
	{
		content: 'Via Search Query',
		id: 'get-dynasties-by-query',
	},
];

export default dynastiesSidebarOptions;
