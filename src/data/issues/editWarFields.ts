import { IssuesFormControlOptions } from '@/interfaces/IssuesFormControlOptions';

const editWarFields: IssuesFormControlOptions[] = [
	{
		id: 1,
		required: true,
		label: 'Name',
		placeholder: 'Name of the war you wish to edit',
		type: 'input',
		htmlId: 'edit-war-name',
	},
	{
		id: 2,
		required: true,
		label: 'Link',
		placeholder: 'Leave the war page link',
		type: 'input',
		htmlId: 'edit-war-link',
		info: `Please make sure the provided link is not broken and correct; you can get the war page link using the 'Copy URL' button on its page`,
	},
	{
		id: 3,
		required: true,
		label: 'Field Name',
		placeholder:
			'Only enter the name of the field that is incorrect or missing',
		type: 'input',
		htmlId: 'edit-war-field-name',
		info: 'Only provide the name of the field that currently holds an empty value or has incorrect content',
	},
	{
		id: 4,
		required: true,
		label: 'Field Content (Your response)',
		placeholder: 'New or updated content to the field',
		type: 'textarea',
		htmlId: 'edit-war-field-content',
		info: 'Provide the appropriate value (answer) for the previously mentioned field that holds incorrect or missing content',
	},
	{
		id: 5,
		required: true,
		label: 'Source(s)',
		placeholder: 'One or more sources backing your response',
		type: 'textarea',
		htmlId: 'edit-war-sources',
		info: 'Include links to one or more sources that proves credibility about your response/answer to be factually correct',
	},
	{
		id: 6,
		htmlId: 'edit-war-comments',
		type: 'textarea',
		label: 'Additional Comments',
		required: false,
		placeholder:
			'Include any additional comments that is closely relevant to this entity',
		info: 'You can mention any new ideas and suggestions or provide any comments or context here',
	},
];

export default editWarFields;
