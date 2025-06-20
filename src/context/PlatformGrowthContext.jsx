import PropTypes from 'prop-types';
import { useContext } from 'react';
import { createContext, useReducer } from 'react';

// Creating the primary Context
const PlatformGrowthContext = createContext();

// Initial state value(s)
const initialState = {
	hidden: false,
};

// Reducer function(s)
function reducer(state, action) {
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

// Context Provider
function PlatformGrowthProvider({ children }) {
	const [{ hidden }, dispatch] = useReducer(reducer, initialState);

	return (
		<PlatformGrowthContext.Provider value={{ hidden, dispatch }}>
			{children}
		</PlatformGrowthContext.Provider>
	);
}

// useContext hook
function usePlatformGrowth() {
	const context = useContext(PlatformGrowthContext);
	if (context === undefined) {
		throw new Error(
			'Error: PlatformGrowthContext was defined outside its Provider scope.'
		);
	}

	return context;
}

export { usePlatformGrowth };
export default PlatformGrowthProvider;

PlatformGrowthProvider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.element,
		PropTypes.string,
	]),
};
