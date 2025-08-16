interface UserInfo {
	id: number;
	required?: boolean;
	label: string;
	placeholder?: string;
	type: 'input' | 'textarea' | 'select';
	htmlId?: string;
	info?: string;
}

const userInfo: UserInfo[] = [
	{
		id: 1,
		htmlId: 'user-info-name',
		type: 'input',
		label: 'Full Name',
		required: true,
		placeholder: 'John Doe',
	},
	{
		id: 2,
		htmlId: 'user-info-email',
		type: 'input',
		label: 'Email',
		required: true,
		placeholder: 'john.doe@example.com',
	},
	{
		id: 3,
		htmlId: 'user-info-location',
		type: 'textarea',
		label: 'Location',
		required: false,
		placeholder: 'Your city and/or country (Optional)',
		info: 'You can include your city and/or country. This is an optional field and we ask this for demographic analytics purpose',
	},
];

export default userInfo;
