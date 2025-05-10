import { BrowserRouter as Router } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

if (import.meta.env.VITE_APP_ENV === 'development') {
	createRoot(document.getElementById('root')).render(
		<StrictMode>
			<Router>
				<App />
			</Router>
		</StrictMode>
	);
} else {
	createRoot(document.getElementById('root')).render(
		<Router>
			<App />
		</Router>
	);
}
