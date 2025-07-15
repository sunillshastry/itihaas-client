import { SidebarSubfield } from '@/interfaces/SidebarSubfield';

const warsSidebarOptions: SidebarSubfield[] = [
	{
		content: 'List All',
		id: 'war-list-all',
	},
	{
		content: 'By ID',
		id: 'get-war-id',
	},
	{
		content: 'By Slug',
		id: 'get-war-slug',
	},
	{
		content: 'Find Search Titles',
		id: 'war-search-titles',
	},
	{
		content: 'Random',
		id: 'war-random',
	},
	{
		content: 'Via Search Query',
		id: 'war-search',
	},
];

export default warsSidebarOptions;
