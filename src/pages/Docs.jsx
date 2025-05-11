import Footer from '../components/Footer';
import MainContainer from '../components/MainContainer';
import Navbar from '../components/Navbar';
import PrimaryHeader from '../components/PrimaryHeader';

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
