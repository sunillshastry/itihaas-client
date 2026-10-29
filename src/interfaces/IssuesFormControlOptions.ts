interface IssuesFormControlOptions {
	id: number;
	required?: boolean;
	label: string;
	placeholder?: string;
	type: 'input' | 'textarea' | 'select' | 'checkbox';
	htmlId?: string;
	info?: string;
	registerHookForm?: string;
}

export type { IssuesFormControlOptions };
