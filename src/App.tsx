import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import DynastiesPage from '@/pages/DynastiesPage';
import RulersPage from '@/pages/RulersPage';
import WarsPage from '@/pages/WarsPage';
import Issues from '@/pages/Issues';
import Search from '@/pages/Search';
import Docs from '@/pages/Docs';
import NotFound from '@/pages/NotFound';
import DynastyPage from '@/pages/DynastyPage';
import WarPage from '@/pages/WarPage';
import RulerPage from '@/pages/RulerPage';
import BackToTopButton from '@/components/elements/BackToTopButton';
import NewContribution from './pages/contributions/NewContribution';
import FixContribution from './pages/contributions/FixContribution';
import APIContribution from './pages/contributions/APIContribution';
import FeedbackContribution from './pages/contributions/FeedbackContribution';
import Register from '@/pages/Register';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

/**
 * Base App component of the application, which is mounted on the 'root' div component
 *
 * @returns The singleton JSX for App component with react-router setup, managing the router system
 */
function App() {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>

				<Route
					path="/dynasties"
					element={<DynastiesPage />}
				/>

				<Route
					path="/dynasties/:dynastySlug"
					element={<DynastyPage />}
				/>

				<Route
					path="/rulers"
					element={<RulersPage />}
				/>

				<Route
					path="/rulers/:rulerSlug"
					element={<RulerPage />}
				/>

				<Route
					path="/wars"
					element={<WarsPage />}
				/>

				<Route
					path="/wars/:warSlug"
					element={<WarPage />}
				/>

				<Route
					path="/issues"
					element={<Issues />}
				/>

				<Route
					path="/issues/new"
					element={<NewContribution />}
				/>

				<Route
					path="/issues/fix"
					element={<FixContribution />}
				/>

				<Route
					path="/issues/api"
					element={<APIContribution />}
				/>

				<Route
					path="/issues/feedback"
					element={<FeedbackContribution />}
				/>

				<Route
					path="/search"
					element={<Search />}
				/>

				<Route
					path="/docs"
					element={<Docs />}
				/>

				<Route
					path="/register"
					element={<Register />}
				/>

				<Route
					path="/privacy"
					element={<PrivacyPolicy />}
				/>
				<Route
					path="/privacy-policy"
					element={<PrivacyPolicy />}
				/>
				<Route
					path="/terms-of-service"
					element={<TermsOfService />}
				/>

				{/* Wildcard route(s) to handle all other routes as 404 state */}
				<Route
					path="*"
					element={<NotFound />}
				/>
			</Routes>
			<BackToTopButton />
		</>
	);
}

export default App;
