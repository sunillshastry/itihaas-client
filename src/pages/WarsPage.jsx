import Footer from '../components/Footer';
import MainContainer from '../components/MainContainer';
import Navbar from '../components/Navbar';
import PrimaryHeader from '../components/PrimaryHeader';

function WarsPage() {
	return (
		<>
			<Navbar />
			<MainContainer>
				<PrimaryHeader>Wars</PrimaryHeader>
			</MainContainer>
			<Footer className="mt-36" />
		</>
	);
}

export default WarsPage;
