import { BrowserRouter as Router } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/index.css';
import App from '@/App.jsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import REACT_QUERY_DEV_TOOLS_POSITION from '@/data/reactQueryDevToolsPosition';
import PlatformGrowthProvider from '@/context/PlatformGrowthContext';
import CitationContextProvider from '@/context/CitationContext';
import ScrollToTop from '@/hooks/useScrollToTop';

const queryClient = new QueryClient();

if (import.meta.env.VITE_APP_ENV === 'development') {
	createRoot(document.getElementById('root')! as HTMLDivElement).render(
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				<PlatformGrowthProvider>
					<CitationContextProvider>
						<ReactQueryDevtools
							initialIsOpen={false}
							buttonPosition={REACT_QUERY_DEV_TOOLS_POSITION}
						/>
						<Router>
							<ScrollToTop />
							<App />
						</Router>
					</CitationContextProvider>
				</PlatformGrowthProvider>
			</QueryClientProvider>
		</StrictMode>
	);
} else {
	createRoot(document.getElementById('root')! as HTMLDivElement).render(
		<QueryClientProvider client={queryClient}>
			<PlatformGrowthProvider>
				<CitationContextProvider>
					<Router>
						<ScrollToTop />
						<App />
					</Router>
				</CitationContextProvider>
			</PlatformGrowthProvider>
		</QueryClientProvider>
	);
}
