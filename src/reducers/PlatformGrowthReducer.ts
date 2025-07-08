import type { Action } from '@/interfaces/ContextAction';
import type { PlatformGrowthState } from '@/interfaces/PlatformGrowthState';

function PlatformGrowthReducer(
	state: PlatformGrowthState,
	action: Action<boolean>
) {
	switch (action.type) {
		case 'hide':
			return {
				...state,
				hidden: true,
			};
		case 'unhide':
			return {
				...state,
				hidden: false,
			};
		default:
			return {
				...state,
				hidden: true,
			};
	}
}

export default PlatformGrowthReducer;
