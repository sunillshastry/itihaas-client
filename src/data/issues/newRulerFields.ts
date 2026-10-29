import { IssuesFormControlOptions } from '@/interfaces/IssuesFormControlOptions';

type NewRulerOptions = IssuesFormControlOptions & {
	registerHookForm:
		| 'name'
		| 'otherNames'
		| 'born'
		| 'died'
		| 'dynasty'
		| 'predecessor'
		| 'successor'
		| 'familyFather'
		| 'familyMother'
		| 'familyWives'
		| 'familyChildren'
		| 'religion'
		| 'reignStart'
		| 'reignEnd'
		| 'descShort'
		| 'descLong'
		| 'sources'
		| 'readings'
		| 'articles'
		| 'comments';
};

const newRulerFields: NewRulerOptions[] = [
	{
		id: 1,
		htmlId: 'new-ruler-name',
		type: 'input',
		label: 'Name',
		required: true,
		placeholder: '',
		info: 'Provide the most popular or well-known name of the ruler',
		registerHookForm: 'name',
	},
	{
		id: 2,
		htmlId: 'new-ruler-other-names',
		type: 'textarea',
		label: 'Other Names',
		required: false,
		placeholder: 'Other known names',
		info: 'Any other potential names or titles given to the ruler in addition to their most well-known name',
		registerHookForm: 'otherNames',
	},
	{
		id: 3,
		htmlId: 'new-ruler-born',
		type: 'input',
		label: 'Born (Year)',
		required: false,
		placeholder: 'Approximate year of birth',
		info: 'Indicate the exact or approximate year of when the ruler was born',
		registerHookForm: 'born',
	},
	{
		id: 4,
		htmlId: 'new-ruler-died',
		type: 'input',
		label: 'Died (Year)',
		required: false,
		placeholder: 'Approximate year of death',
		info: 'Indicate the exact or approximate year of when the ruler died',
		registerHookForm: 'died',
	},
	{
		id: 5,
		htmlId: 'new-ruler-dynasty',
		type: 'input',
		label: 'Dynasty',
		required: true,
		placeholder: 'Can be more than one dynasty',
		info: 'Mention at least one dynasty that the ruler belonged to',
		registerHookForm: 'dynasty',
	},
	{
		id: 6,
		htmlId: 'new-ruler-predecessor',
		type: 'input',
		label: 'Predecessor',
		required: false,
		placeholder: 'Mention the predecessor of the ruler in question',
		registerHookForm: 'predecessor',
	},
	{
		id: 7,
		htmlId: 'new-ruler-successor',
		type: 'input',
		label: 'Successor',
		required: false,
		placeholder: 'Mention the successor of the ruler in question',
		registerHookForm: 'successor',
	},
	{
		id: 8,
		htmlId: 'new-ruler-family-father',
		type: 'input',
		label: 'Family (Father)',
		required: false,
		placeholder: '',
		registerHookForm: 'familyFather',
	},
	{
		id: 9,
		htmlId: 'new-ruler-family-mother',
		type: 'input',
		label: 'Family (Mother)',
		required: false,
		placeholder: '',
		registerHookForm: 'familyMother',
	},
	{
		id: 10,
		htmlId: 'new-ruler-family-wives',
		type: 'textarea',
		label: 'Family (Wives)',
		required: false,
		placeholder: '',
		info: 'Mention as many as available',
		registerHookForm: 'familyWives',
	},
	{
		id: 11,
		htmlId: 'new-ruler-family-children',
		type: 'textarea',
		label: 'Family (Children)',
		required: false,
		placeholder: '',
		info: 'Mention as many as available',
		registerHookForm: 'familyChildren',
	},
	{
		id: 12,
		htmlId: 'new-ruler-religion',
		type: 'input',
		label: 'Religion(s)',
		required: false,
		placeholder: '',
		info: 'Indicate as many religions practiced by the ruler',
		registerHookForm: 'religion',
	},
	{
		id: 13,
		htmlId: 'new-ruler-reign-start',
		type: 'input',
		label: 'Reign (Begin)',
		required: false,
		placeholder: '',
		info: "Indicate the exact or approximate timeline of when the ruler's reign started",
		registerHookForm: 'reignStart',
	},
	{
		id: 14,
		htmlId: 'new-ruler-reign-end',
		type: 'input',
		label: 'Reign (End)',
		required: false,
		placeholder: '',
		info: "Indicate the exact or approximate timeline of when the ruler's reign ended",
		registerHookForm: 'reignEnd',
	},
	{
		id: 15,
		htmlId: 'new-ruler-desc-short',
		type: 'textarea',
		label: 'Description (Short)',
		required: true,
		placeholder: 'A 30-50 word(s) short description of the ruler',
		info: 'Provide a brief introduction of the ruler; this piece of information is used to display minimal ruler data on pages',
		registerHookForm: 'descShort',
	},
	{
		id: 16,
		htmlId: 'new-ruler-desc-long',
		type: 'textarea',
		label: 'Description (Long)',
		required: false,
		placeholder: 'A comprehensive 250-300 word(s) description',
		info: 'Provide a detailed summary of the ruler. Include all relevant topics and points regarding their birth, ruling and eventual death',
		registerHookForm: 'descLong',
	},
	{
		id: 17,
		htmlId: 'new-ruler-sources',
		type: 'textarea',
		label: 'Sources',
		required: true,
		placeholder: 'Include all links to your credible and available sources',
		info: 'Provide as many sources as possible separated by commas; Make sure your source(s) links are accurate and available to view',
		registerHookForm: 'sources',
	},
	{
		id: 18,
		htmlId: 'new-ruler-readings',
		type: 'textarea',
		label: 'Further Readings',
		required: false,
		placeholder: 'Any additional readings related to the ruler',
		info: 'You can include links to any additional online resources, books, movies, related to the ruler',
		registerHookForm: 'readings',
	},
	{
		id: 19,
		htmlId: 'new-ruler-articles',
		type: 'textarea',
		label: 'Articles',
		required: false,
		placeholder: 'Written articles related to the ruler (web)',
		info: 'Leave links to any available and accessible articles written about or mentioning the ruler',
		registerHookForm: 'articles',
	},
	{
		id: 20,
		htmlId: 'new-ruler-comments',
		type: 'textarea',
		label: 'Additional Comments',
		required: false,
		placeholder: 'Include anything that is closely relevant to this entity',
		info: 'You can mention any new ideas and suggestions or provide any comments or context here',
		registerHookForm: 'comments',
	},
];

export default newRulerFields;
