interface Action<T> {
	type: string;
	payload?: T;
}

export type { Action };
