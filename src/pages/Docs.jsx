import Footer from '@/components/elements/Footer';
import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import PrimaryHeader from '@/components/elements/PrimaryHeader';

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
			<Footer className="mt-36" />
		</>
	);
}

export default Docs;
