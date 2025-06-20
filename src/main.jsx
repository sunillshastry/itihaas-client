import { BrowserRouter as Router } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/index.css';
import App from '@/App.jsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import REACT_QUERY_DEV_TOOLS_POSITION from '@/data/reactQueryDevToolsPosition';
import PlatformGrowthProvider from '@/context/PlatformGrowthContext';

const queryClient = new QueryClient();

if (import.meta.env.VITE_APP_ENV === 'development') {
	createRoot(document.getElementById('root')).render(
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				<PlatformGrowthProvider>
					<ReactQueryDevtools
						initialIsOpen={false}
						buttonPosition={REACT_QUERY_DEV_TOOLS_POSITION}
					/>
					<Router>
						<App />
					</Router>
				</PlatformGrowthProvider>
			</QueryClientProvider>
		</StrictMode>
	);
} else {
	createRoot(document.getElementById('root')).render(
		<QueryClientProvider client={queryClient}>
			<PlatformGrowthProvider>
				<Router>
					<App />
				</Router>
			</PlatformGrowthProvider>
		</QueryClientProvider>
	);
}
