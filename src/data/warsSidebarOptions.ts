import { SidebarSubfield } from '@/interfaces/SidebarSubfield';

const warsSidebarOptions: SidebarSubfield[] = [
	{
		content: 'List All',
		id: 'war-list-all',
	},
	{
		content: 'By ID',
		id: 'get-war-by-id',
	},
	{
		content: 'By Slug',
		id: 'get-war-by-slug',
	},
	{
		content: 'Find Search Titles',
		id: 'get-war-search-titles',
	},
	{
		content: 'Random',
		id: 'get-random-war',
	},
	{
		content: 'Via Search Query',
		id: 'get-wars-by-query',
	},
];

export default warsSidebarOptions;
