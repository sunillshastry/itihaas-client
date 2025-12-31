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
	// Setup and usage for Google Analytics via the custom hook 'useGoogleAnalytics
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
