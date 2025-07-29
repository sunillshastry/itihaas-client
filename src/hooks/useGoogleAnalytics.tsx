import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useGoogleAnalytics = () => {
	const location = useLocation();

	useEffect(() => {
		if (window.gtag) {
			window.gtag(
				'config',
				import.meta.env.VITE_GOOGLE_ANALYTICS_MEASUREMENT_ID,
				{
					page_path: location.pathname,
				}
			);
		}
	}, [location]);
};

export default useGoogleAnalytics;
