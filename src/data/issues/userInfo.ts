import { IssuesFormControlOptions } from '@/interfaces/IssuesFormControlOptions';

type UserInfoOptions = IssuesFormControlOptions & {
	registerHookForm: 'userFullName' | 'userLocation' | 'userEmail';
	validationPattern?: string | RegExp;
};

const userInfo: UserInfoOptions[] = [
	{
		id: 1,
		htmlId: 'user-info-name',
		type: 'input',
		label: 'Full Name',
		required: true,
		placeholder: 'John Doe',
		registerHookForm: 'userFullName',
	},
	{
		id: 2,
		htmlId: 'user-info-email',
		type: 'input',
		label: 'Email',
		required: true,
		placeholder: 'john.doe@example.com',
		registerHookForm: 'userEmail',
		validationPattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
	},
	{
		id: 3,
		htmlId: 'user-info-location',
		type: 'textarea',
		label: 'Location',
		required: false,
		placeholder: 'Your city and/or country (Optional)',
		info: 'You can include your city and/or country. This is an optional field and we ask this for demographic analytics purpose',
		registerHookForm: 'userLocation',
	},
];

export default userInfo;
