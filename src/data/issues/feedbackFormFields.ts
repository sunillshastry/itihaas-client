import { IssuesFormControlOptions } from '@/interfaces/IssuesFormControlOptions';

type FeedbackFields = IssuesFormControlOptions & {
	registerHookForm: 'subject' | 'description' | 'additionalComments';
};

const feedbackFormFields: FeedbackFields[] = [
	{
		id: 1,
		required: true,
		label: 'Subject',
		placeholder: 'Your feedback subject topic',
		type: 'input',
		htmlId: 'feedback-subject',
		registerHookForm: 'subject',
	},
	{
		id: 2,
		required: true,
		label: 'Description',
		placeholder:
			"Provide more context and insights about what you'd like on Itihaas",
		type: 'textarea',
		htmlId: 'feedback-description',
		registerHookForm: 'description',
	},
	{
		id: 3,
		htmlId: 'feedback-additional-comments',
		type: 'textarea',
		label: 'Additional Comments',
		required: false,
		placeholder:
			'Include anything that you wish to add that is relevant to your description and subject',
		info: 'You can mention any new ideas and suggestions or provide additional context',
		registerHookForm: 'additionalComments',
	},
];

export default feedbackFormFields;
