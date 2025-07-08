import type { CitationContextState } from '@/interfaces/CitationContextState';
import type { Action } from '@/interfaces/ContextAction';
import CitationReducer from '@/reducers/CitationReducer';
import PropTypes from 'prop-types';
import { createContext, type Dispatch, useContext, useReducer } from 'react';

interface FunctionProps {
	children: Readonly<React.ReactNode>;
}

// Initial state value(s)
const initialState: CitationContextState = {
	open: false,
	format: 'mla',
};

interface Context extends CitationContextState {
	dispatch: Dispatch<Action<string>>;
}

// Creating the primary Context
const CitationContext = createContext<Context | null>(null);

// Context Provider
function CitationContextProvider({ children }: FunctionProps) {
	const [{ open, format }, dispatch] = useReducer(
		CitationReducer,
		initialState
	);

	return (
		<CitationContext.Provider value={{ open, format, dispatch }}>
			{children}
		</CitationContext.Provider>
	);
}

// useContext hook
function useCitation(): null | Context {
	const context = useContext(CitationContext);
	if (context === undefined) {
		throw new Error(
			'Error: CitationContext was defined outside its Provider scope.'
		);
	}

	return context;
}

export { useCitation };
export default CitationContextProvider;

CitationContextProvider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.element,
		PropTypes.string,
	]),
};
