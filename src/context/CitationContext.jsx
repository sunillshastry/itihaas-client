import CitationReducer from '@/reducers/CitationReducer';
import PropTypes from 'prop-types';
import { createContext, useContext, useReducer } from 'react';

// Creating the primary Context
const CitationContext = createContext();

// Initial state value(s)
const initialState = {
	open: false,
	format: 'mla',
};

// Context Provider
function CitationContextProvider({ children }) {
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
function useCitation() {
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
