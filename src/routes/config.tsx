import { ReactElement } from 'react';
import Home from '@/pages/Home';
import DynastiesPage from '@/pages/DynastiesPage';
import RulersPage from '@/pages/RulersPage';
import DynastyPage from '@/pages/DynastyPage';
import RulerPage from '@/pages/RulerPage';
import WarsPage from '@/pages/WarsPage';
import WarPage from '@/pages/WarPage';
import Issues from '@/pages/Issues';
import NewContribution from '@/pages/contributions/NewContribution';
import FixContribution from '@/pages/contributions/FixContribution';
import APIContribution from '@/pages/contributions/APIContribution';
import FeedbackContribution from '@/pages/contributions/FeedbackContribution';
import Search from '@/pages/Search';
import Docs from '@/pages/Docs';
import Register from '@/pages/Register';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';
import NotFound from '@/pages/NotFound';

interface FileRoute {
	path: string;
	element: ReactElement;
	caseSensitive?: boolean;
}

const RouterRoutes: FileRoute[] = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/dynasties',
		element: <DynastiesPage />,
	},
	{
		path: '/dynasties/:dynastySlug',
		element: <DynastyPage />,
	},
	{
		path: '/rulers',
		element: <RulersPage />,
	},
	{
		path: '/rulers/:rulerSlug',
		element: <RulerPage />,
	},
	{
		path: '/wars',
		element: <WarsPage />,
	},
	{
		path: '/wars/:warSlug',
		element: <WarPage />,
	},
	{
		path: '/issues',
		element: <Issues />,
	},
	{
		path: '/issues/new',
		element: <NewContribution />,
	},
	{
		path: '/issues/fix',
		element: <FixContribution />,
	},
	{
		path: '/issues/api',
		element: <APIContribution />,
	},
	{
		path: '/issues/feedback',
		element: <FeedbackContribution />,
	},
	{
		path: '/search',
		element: <Search />,
	},
	{
		path: '/docs',
		element: <Docs />,
	},
	{
		path: '/register',
		element: <Register />,
	},
	{
		path: '/privacy',
		element: <PrivacyPolicy />,
	},
	{
		path: '/privacy-policy',
		element: <PrivacyPolicy />,
	},
	{
		path: '/terms-of-service',
		element: <TermsOfService />,
	},

	// Not Found (Wildcard route)

	{
		path: '*',
		element: <NotFound />,
	},
];

export default RouterRoutes;
