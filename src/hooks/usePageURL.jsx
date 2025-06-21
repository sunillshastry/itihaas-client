import { useLocation } from 'react-router-dom';

function usePageURL() {
	const location = useLocation();
	return `${window.location.origin}${location.pathname}`;
}

export default usePageURL;
