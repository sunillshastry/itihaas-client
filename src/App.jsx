import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DynastiesPage from './pages/DynastiesPage';
import RulersPage from './pages/RulersPage';
import WarsPage from './pages/WarsPage';
import Issues from './pages/Issues';
import Search from './pages/Search';
import Docs from './pages/Docs';
import NotFound from './pages/NotFound';
import DynastyPage from './pages/DynastyPage';
import WarPage from './pages/WarPage';
import RulerPage from './pages/RulerPage';
import BackToTopButton from './components/BackToTopButton';

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
					path="/search"
					element={<Search />}
				/>

				<Route
					path="/docs"
					element={<Docs />}
				/>

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
