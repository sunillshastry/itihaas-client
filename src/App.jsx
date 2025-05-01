import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DynastiesPage from './pages/DynastiesPage';
import RulersPage from './pages/RulersPage';
import WarsPage from './pages/WarsPage';
import Issues from './pages/Issues';
import Search from './pages/Search';
import Docs from './pages/Docs';
import NotFound from './pages/NotFound';

import Navbar from './components/Navbar';

function App() {
	return (
		<>
			<Navbar />
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
					path="/rulers"
					element={<RulersPage />}
				/>
				<Route
					path="/wars"
					element={<WarsPage />}
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
		</>
	);
}

export default App;
