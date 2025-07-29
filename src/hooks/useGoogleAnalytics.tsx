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
					cookie_domain: 'auto',
					cookie_flags: 'SameSite=None;Secure',
				}
			);
		}
	}, [location]);
};

export default useGoogleAnalytics;
