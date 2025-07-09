import type { CitationContextState } from '@/interfaces/CitationContextState';
import type { Action } from '@/interfaces/ContextAction';

function CitationReducer(
	state: CitationContextState,
	action: Action<string>
): CitationContextState {
	switch (action.type) {
		// Open settings
		case 'open/true':
			return {
				...state,
				open: true,
			};

		case 'open/false':
			return {
				...state,
				open: false,
			};

		// Format settings
		case 'format/mla':
			return {
				...state,
				format: 'mla',
			};

		case 'format/apa':
			return {
				...state,
				format: 'apa',
			};

		case 'format/chicago':
			return {
				...state,
				format: 'chicago',
			};

		case 'format/harvard':
			return {
				...state,
				format: 'harvard',
			};

		default:
			return {
				...state,
				open: false,
				format: 'mla',
			};
	}
}

export default CitationReducer;
