import { IssuesFormControlOptions } from '@/interfaces/IssuesFormControlOptions';

type NewWarOptions = IssuesFormControlOptions & {
	registerHookForm:
		| 'name'
		| 'otherNames'
		| 'begin'
		| 'end'
		| 'winners'
		| 'losers'
		| 'casualties'
		| 'locations'
		| 'leadersA'
		| 'leadersB'
		| 'causes'
		| 'descShort'
		| 'descLong'
		| 'sources'
		| 'readings'
		| 'articles'
		| 'comments';
};

const newWarFields: NewWarOptions[] = [
	{
		id: 1,
		htmlId: 'new-war-name',
		type: 'input',
		label: 'Name',
		required: true,
		placeholder: '',
		info: 'Provide the most popular or well-known name of the war',
		registerHookForm: 'name',
	},
	{
		id: 2,
		htmlId: 'new-war-other-names',
		type: 'textarea',
		label: 'Other Names',
		required: false,
		placeholder: 'Other known names',
		info: 'Any other potential names or titles given to the war in addition to its most well-known name',
		registerHookForm: 'otherNames',
	},
	{
		id: 3,
		htmlId: 'new-war-begin',
		type: 'input',
		label: 'Begin Timeline (Year)',
		required: false,
		placeholder: 'Approximate year when the war took place',
		registerHookForm: 'begin',
	},
	{
		id: 4,
		htmlId: 'new-war-end',
		type: 'input',
		label: 'End Timeline (Year)',
		required: false,
		placeholder: 'Approximate year when the war ended',
		registerHookForm: 'end',
	},
	{
		id: 5,
		htmlId: 'new-war-winners',
		type: 'input',
		label: 'Winners',
		required: false,
		placeholder: 'Mention the name of the ruler(s)/dynasty that won the war',
		registerHookForm: 'winners',
	},
	{
		id: 6,
		htmlId: 'new-war-losers',
		type: 'input',
		label: 'Losers',
		required: false,
		placeholder: 'Mention the name of the ruler(s)/dynasty that lost the war',
		registerHookForm: 'losers',
	},
	{
		id: 7,
		htmlId: 'new-war-casualties',
		type: 'input',
		label: 'Casualties',
		required: false,
		placeholder: 'Estimate of total casualties that took place in this war',
		registerHookForm: 'casualties',
	},
	{
		id: 8,
		htmlId: 'new-war-locations',
		type: 'textarea',
		label: 'Locations',
		required: false,
		placeholder: '',
		info: 'Modern day geographical locations of where the dynasty was established and/or ruled',
		registerHookForm: 'locations',
	},
	{
		id: 9,
		htmlId: 'new-war-leaders-a',
		type: 'textarea',
		label: 'Leaders (Winners)',
		required: false,
		placeholder: '',
		info: 'List of all prominent leaders from the winning side/dynasties (can include multiple names, separated by commas)',
		registerHookForm: 'leadersA',
	},
	{
		id: 10,
		htmlId: 'new-war-leaders-b',
		type: 'textarea',
		label: 'Leaders (Losers)',
		required: false,
		placeholder: '',
		info: 'List of all prominent leaders from the losing side/dynasties (can include multiple names, separated by commas)',
		registerHookForm: 'leadersB',
	},
	{
		id: 11,
		htmlId: 'new-war-causes',
		type: 'textarea',
		label: 'Causes',
		required: false,
		placeholder: '',
		info: 'List of all reasons that caused the war between the two sides (can include multiple, separated by commas)',
		registerHookForm: 'causes',
	},
	{
		id: 12,
		htmlId: 'new-war-desc-short',
		type: 'textarea',
		label: 'Description (Short)',
		required: true,
		placeholder: 'A 30-50 word(s) short description of the war',
		info: 'Provide a brief introduction of the war; this piece of information is used to display minimal war data on pages',
		registerHookForm: 'descShort',
	},
	{
		id: 13,
		htmlId: 'new-war-desc-long',
		type: 'textarea',
		label: 'Description (Long)',
		required: false,
		placeholder: 'A comprehensive 250-300 word(s) description',
		info: 'Provide a detailed summary of the war. Include all relevant topics and points regarding its formation, ruling and its end',
		registerHookForm: 'descLong',
	},
	{
		id: 14,
		htmlId: 'new-war-sources',
		type: 'textarea',
		label: 'Sources',
		required: true,
		placeholder: 'Include all links to your credible and available sources',
		info: 'Provide as many sources as possible separated by commas; Make sure your source(s) links are accurate and available to view',
		registerHookForm: 'sources',
	},
	{
		id: 15,
		htmlId: 'new-war-readings',
		type: 'textarea',
		label: 'Further Readings',
		required: false,
		placeholder: 'Any additional readings related to the war',
		info: 'You can include links to any additional online resources, books, movies, related to the dynasty (can include multiple, separated by commas)',
		registerHookForm: 'readings',
	},
	{
		id: 16,
		htmlId: 'new-war-articles',
		type: 'textarea',
		label: 'Articles',
		required: false,
		placeholder: 'Written articles related to the war (web)',
		info: 'Leave links to any publicly available and accessible articles written about or mentioning the dynasty (can include multiple, separated by commas)',
		registerHookForm: 'articles',
	},
	{
		id: 17,
		htmlId: 'new-war-comments',
		type: 'textarea',
		label: 'Additional Comments',
		required: false,
		placeholder: 'Include anything that is closely relevant to this entity',
		info: 'You can mention any new ideas and suggestions or provide any comments or context here',
		registerHookForm: 'comments',
	},
];

export default newWarFields;
