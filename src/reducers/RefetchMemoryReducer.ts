import { Action } from '@/interfaces/ContextAction';
import { RefetchMemoryContextState } from '@/interfaces/RefetchMemoryContextState';

function RefetchMemoryReducer(
	state: RefetchMemoryContextState,
	action: Action<string>
): RefetchMemoryContextState {
	switch (action.type) {
		case 'refetch/append':
			return {
				...state,
				fetchCount: state.fetchCount + 1,
				isRefetch: state.fetchCount >= 3,
			};

		case 'refetch/reset':
			return {
				...state,
				fetchCount: 0,
				isRefetch: false,
			};

		default:
			return {
				...state,
				fetchCount: 0,
				isRefetch: false,
			};
	}
}

export default RefetchMemoryReducer;
