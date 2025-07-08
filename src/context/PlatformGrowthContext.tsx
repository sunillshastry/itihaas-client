import PropTypes from 'prop-types';
import { useContext, createContext, useReducer, type Dispatch } from 'react';
import PlatformGrowthReducer from '@/reducers/PlatformGrowthReducer';
import type { PlatformGrowthState } from '@/interfaces/PlatformGrowthState';
import type { Action } from '@/interfaces/ContextAction';

interface FunctionProps {
	children: Readonly<React.ReactNode>;
}

// Initial state value(s)
const initialState: PlatformGrowthState = {
	hidden: false,
};

interface Context extends PlatformGrowthState {
	dispatch: Dispatch<Action<boolean>>;
}

// Creating the primary Context
const PlatformGrowthContext = createContext<Context | null>(null);

// Context Provider
function PlatformGrowthProvider({ children }: FunctionProps) {
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
function usePlatformGrowth(): null | Context {
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
