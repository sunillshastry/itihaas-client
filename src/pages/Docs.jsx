import Footer from '../components/Footer';
import MainContainer from '../components/MainContainer';
import Navbar from '../components/Navbar';
import PrimaryHeader from '../components/PrimaryHeader';

/**
 * Main React.JSX page component for /docs: Documentation page
 *
 * @returns The JSX for the documentations page
 */
function Docs() {
	return (
		<>
			<Navbar />
			<MainContainer>
				<PrimaryHeader>Documentation</PrimaryHeader>
			</MainContainer>
			<Footer />
		</>
	);
}

export default Docs;
