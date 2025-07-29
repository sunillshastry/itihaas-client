import { Route, Routes } from 'react-router-dom';
import BackToTopButton from '@/components/elements/BackToTopButton';
import RouterRoutes from './routes/config';
import useGoogleAnalytics from './hooks/useGoogleAnalytics';

/**
 * Base App component of the application, which is mounted on the 'root' div component
 *
 * @returns The singleton JSX for App component with react-router setup, managing the router system
 */
function App() {
	// Analytics
	useGoogleAnalytics();

	return (
		<>
			<Routes>
				{RouterRoutes.map(function (route) {
					return (
						<Route
							key={route.path}
							path={route.path}
							element={route.element}
						/>
					);
				})}
			</Routes>
			<BackToTopButton />
		</>
	);
}

export default App;
