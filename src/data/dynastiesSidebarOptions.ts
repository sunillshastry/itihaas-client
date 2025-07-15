import { SidebarSubfield } from '@/interfaces/SidebarSubfield';

const dynastiesSidebarOptions: SidebarSubfield[] = [
	{
		content: 'List All',
		id: 'dynasty-list-all',
	},
	{
		content: 'By ID',
		id: 'get-dynasty-id',
	},
	{
		content: 'By Slug',
		id: 'get-dynasty-slug',
	},
	{
		content: 'Find Search Titles',
		id: 'dynasty-search-titles',
	},
	{
		content: 'Random',
		id: 'dynasty-random',
	},
	{
		content: 'Via Search Query',
		id: 'dynasty-search',
	},
];

export default dynastiesSidebarOptions;
