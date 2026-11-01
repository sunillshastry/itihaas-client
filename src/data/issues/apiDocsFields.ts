import { IssuesFormControlOptions } from '@/interfaces/IssuesFormControlOptions';

type NewApiDocsOptions = IssuesFormControlOptions & {
	registerHookForm:
		| 'subject'
		| 'description'
		| 'fixComments'
		| 'additionalComments';
};

const newApiDocsFields: NewApiDocsOptions[] = [
	{
		id: 1,
		htmlId: 'api-docs-subject',
		type: 'input',
		label: 'Subject',
		required: true,
		placeholder: 'API Key not working...',
		info: 'Provide an apt title for your API/Docs related issue',
		registerHookForm: 'subject',
	},
	{
		id: 2,
		htmlId: 'api-docs-description',
		type: 'textarea',
		label: 'Description',
		required: true,
		placeholder: 'Explain your actual issue here',
		info: 'Explain your workflow and what you did, and then mention what did not work as expected',
		registerHookForm: 'description',
	},
	{
		id: 3,
		htmlId: 'api-docs-fix-comments',
		type: 'textarea',
		label: 'Fix Comments',
		required: false,
		placeholder: 'Your potential solution or fix to this issue',
		info: 'If you have a logical solution to the issue you are facing, feel free to let us know here',
		registerHookForm: 'fixComments',
	},
	{
		id: 4,
		htmlId: 'api-docs-additional-comments',
		type: 'textarea',
		label: 'Additional Comments',
		required: false,
		placeholder: 'Include anything that you wish to add that is relevant',
		info: 'You can mention any new ideas and suggestions or provide additional context',
		registerHookForm: 'additionalComments',
	},
];

export default newApiDocsFields;
