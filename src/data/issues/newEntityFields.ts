import { IssuesFormControlOptions } from '@/interfaces/IssuesFormControlOptions';

type NewEntityOptions = IssuesFormControlOptions & {
	registerHookForm: 'name' | 'description';
};

const newEntityFields: NewEntityOptions[] = [
	{
		id: 1,
		htmlId: 'new-entity-name',
		type: 'input',
		label: 'Name',
		required: true,
		placeholder: '',
		info: 'Ensure that the entity is not already part of Itihaas',
		registerHookForm: 'name',
	},
	{
		id: 2,
		htmlId: 'new-entity-description',
		type: 'textarea',
		label: 'Description',
		required: false,
		placeholder: 'Short and relevant description or points about the entity',
		info: 'Providing any sources or relevant links can be helpful',
		registerHookForm: 'description',
	},
];

export default newEntityFields;
