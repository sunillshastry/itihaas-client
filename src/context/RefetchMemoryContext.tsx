import { Action } from '@/interfaces/ContextAction';
import { RefetchMemoryContextState } from '@/interfaces/RefetchMemoryContextState';
import RefetchMemoryReducer from '@/reducers/RefetchMemoryReducer';
import { createContext, Dispatch, useContext, useReducer } from 'react';

interface FunctionProps {
	children: Readonly<React.ReactNode>;
}

const initialState: RefetchMemoryContextState = {
	fetchCount: 0,
	isRefetch: false,
};

interface Context extends RefetchMemoryContextState {
	dispatch: Dispatch<Action<string>>;
}

const RefetchMemoryContext = createContext<Context | null>(null);

function RefetchMemoryContextProvider({ children }: FunctionProps) {
	const [{ fetchCount, isRefetch }, dispatch] = useReducer(
		RefetchMemoryReducer,
		initialState
	);

	return (
		<RefetchMemoryContext.Provider value={{ fetchCount, isRefetch, dispatch }}>
			{children}
		</RefetchMemoryContext.Provider>
	);
}

function useRefetchMemory(): Context {
	const context = useContext(RefetchMemoryContext);
	if (!context) {
		throw new Error(
			'RefetchMemoryContext was defined outside its Provider scope.'
		);
	}
	return context;
}

export { useRefetchMemory };

export default RefetchMemoryContextProvider;
