function PlatformGrowthReducer(state, action) {
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
