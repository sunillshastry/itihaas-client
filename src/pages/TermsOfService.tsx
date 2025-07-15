import Footer from '@/components/elements/Footer';
import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import PrimaryHeader from '@/components/elements/PrimaryHeader';

function TermsOfService() {
	return (
		<>
			<Navbar />
			<MainContainer>
				<PrimaryHeader>Terms of Service</PrimaryHeader>
			</MainContainer>
			<Footer className="mt-36" />
		</>
	);
}

export default TermsOfService;
