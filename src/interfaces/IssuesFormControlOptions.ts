interface IssuesFormControlOptions {
	id: number;
	required?: boolean;
	label: string;
	placeholder?: string;
	type: 'input' | 'textarea' | 'select';
	htmlId?: string;
	info?: string;
}

export type { IssuesFormControlOptions };
