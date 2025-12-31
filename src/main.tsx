/**
 * Copyright (C) 2025 Itihaas | Sunil Shastry
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version
 *
 * To view full licensing and usage information, visit: https://github.com/sunillshastry/itihaas-api/blob/master/LICENSE
 */

import { BrowserRouter as Router } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/index.css';
import App from '@/App.jsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import REACT_QUERY_DEV_TOOLS_POSITION from '@/data/reactQueryDevToolsPosition';
import PlatformGrowthProvider from '@/context/PlatformGrowthContext';
import CitationContextProvider from '@/context/CitationContext';
import ScrollToTop from '@/hooks/useScrollToTop';

// Setup an initial QueryClient instance for React Query library
const queryClient = new QueryClient();

// Creating a React root instance while in 'development' mode
// Includes custom devtools for performance and efficiency monitoring
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
	// Production environment root instance for the React application
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
