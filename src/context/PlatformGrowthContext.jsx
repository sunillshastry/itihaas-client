import PropTypes from 'prop-types';
import { useContext, createContext, useReducer } from 'react';
import PlatformGrowthReducer from '@/reducers/PlatformGrowthReducer';

// Creating the primary Context
const PlatformGrowthContext = createContext();

// Initial state value(s)
const initialState = {
	hidden: false,
};

// Context Provider
function PlatformGrowthProvider({ children }) {
	const [{ hidden }, dispatch] = useReducer(
		PlatformGrowthReducer,
		initialState
	);

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
