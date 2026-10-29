import { IssuesFormControlOptions } from '@/interfaces/IssuesFormControlOptions';

type NewDynastyOptions = IssuesFormControlOptions & {
	registerHookForm:
		| 'name'
		| 'otherNames'
		| 'reignBegin'
		| 'reignEnd'
		| 'capitals'
		| 'currencies'
		| 'locations'
		| 'languages'
		| 'population'
		| 'area'
		| 'religions'
		| 'descShort'
		| 'descLong'
		| 'sources'
		| 'readings'
		| 'articles'
		| 'comments';
};

const newDynastyFields: NewDynastyOptions[] = [
	{
		id: 1,
		htmlId: 'new-dynasty-name',
		type: 'input',
		label: 'Name',
		required: true,
		placeholder: '',
		info: 'Provide the most popular or well-known name of the dynasty',
		registerHookForm: 'name',
	},
	{
		id: 2,
		htmlId: 'new-dynasty-other-names',
		type: 'textarea',
		label: 'Other Names',
		required: false,
		placeholder: 'Other known names',
		info: 'Any other potential names or titles given to the dynasty in addition to its most well-known name',
		registerHookForm: 'otherNames',
	},
	{
		id: 3,
		htmlId: 'new-dynasty-reign-begin',
		type: 'input',
		label: 'Timeline (Begin)',
		required: true,
		placeholder: '',
		info: 'Indicate the exact or approximate timeline of when the dynasty began',
		registerHookForm: 'reignBegin',
	},
	{
		id: 4,
		htmlId: 'new-dynasty-reign-end',
		type: 'input',
		label: 'Timeline (End)',
		required: true,
		placeholder: '',
		info: 'Indicate the exact or approximate timeline of when the dynasty ended',
		registerHookForm: 'reignEnd',
	},
	{
		id: 5,
		htmlId: 'new-dynasty-capitals',
		type: 'textarea',
		label: 'Capitals',
		required: false,
		placeholder: 'One or more city capitals of the dynasty',
		info: 'Mention one or more territorial capitals established by the dynasty',
		registerHookForm: 'capitals',
	},
	{
		id: 6,
		htmlId: 'new-dynasty-currencies',
		type: 'input',
		label: 'Currencies',
		required: false,
		placeholder: '',
		info: 'Any conventional or unconventional methods of currencies established and used during the dynasty reign',
		registerHookForm: 'currencies',
	},
	{
		id: 7,
		htmlId: 'new-dynasty-locations',
		type: 'textarea',
		label: 'Locations',
		required: false,
		placeholder: '',
		info: 'Modern day geographical locations of where the dynasty was established and/or ruled',
		registerHookForm: 'locations',
	},
	{
		id: 8,
		htmlId: 'new-dynasty-languages',
		type: 'input',
		label: 'Languages',
		required: false,
		placeholder: 'Spoken and other linguistic methods',
		registerHookForm: 'languages',
	},
	{
		id: 9,
		htmlId: 'new-dynasty-population',
		type: 'input',
		label: 'Population',
		required: false,
		placeholder: '',
		info: "An approximate estimation of the population in the location(s) of the dynasty's reign",
		registerHookForm: 'population',
	},
	{
		id: 10,
		htmlId: 'new-dynasty-area',
		type: 'input',
		label: 'Area',
		required: false,
		placeholder: 'Total land area in sq. km.',
		registerHookForm: 'area',
	},
	{
		id: 11,
		htmlId: 'new-dynasty-religions',
		type: 'textarea',
		label: 'Religions',
		required: false,
		placeholder: '',
		info: 'Mention all growing, known, and practiced religions during this age by the dynasty members',
		registerHookForm: 'religions',
	},
	{
		id: 12,
		htmlId: 'new-dynasty-desc-short',
		type: 'textarea',
		label: 'Description (Short)',
		required: true,
		placeholder: 'A 30-50 word(s) short description of the dynasty',
		info: 'Provide a brief introduction of the dynasty; this piece of information is used to display minimal dynasty data on pages',
		registerHookForm: 'descShort',
	},
	{
		id: 13,
		htmlId: 'new-dynasty-desc-long',
		type: 'textarea',
		label: 'Description (Long)',
		required: false,
		placeholder: 'A comprehensive 250-300 word(s) description',
		info: 'Provide a detailed summary of the dynasty. Include all relevant topics and points regarding its formation, ruling and its end',
		registerHookForm: 'descLong',
	},
	{
		id: 14,
		htmlId: 'new-dynasty-sources',
		type: 'textarea',
		label: 'Sources',
		required: true,
		placeholder: 'Include all links to your credible and available sources',
		info: 'Provide as many sources as possible separated by commas; Make sure your source(s) links are accurate and available to view',
		registerHookForm: 'sources',
	},
	{
		id: 15,
		htmlId: 'new-dynasty-readings',
		type: 'textarea',
		label: 'Further Readings',
		required: false,
		placeholder: 'Any additional readings related to the dynasty',
		info: 'You can include links to any additional online resources, books, movies, related to the dynasty',
		registerHookForm: 'readings',
	},
	{
		id: 16,
		htmlId: 'new-dynasty-articles',
		type: 'textarea',
		label: 'Articles',
		required: false,
		placeholder: 'Written articles related to the dynasty (web)',
		info: 'Leave links to any available and accessible articles written about or mentioning the dynasty',
		registerHookForm: 'articles',
	},
	{
		id: 17,
		htmlId: 'new-dynasty-comments',
		type: 'textarea',
		label: 'Additional Comments',
		required: false,
		placeholder: 'Include anything that is closely relevant to this entity',
		info: 'You can mention any new ideas and suggestions or provide any comments or context here',
		registerHookForm: 'comments',
	},
];

export default newDynastyFields;
