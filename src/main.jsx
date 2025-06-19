import { BrowserRouter as Router } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/index.css';
import App from '@/App.jsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

if (import.meta.env.VITE_APP_ENV === 'development') {
	createRoot(document.getElementById('root')).render(
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				<Router>
					<App />
				</Router>
			</QueryClientProvider>
		</StrictMode>
	);
} else {
	createRoot(document.getElementById('root')).render(
		<QueryClientProvider client={queryClient}>
			<Router>
				<App />
			</Router>
		</QueryClientProvider>
	);
}
