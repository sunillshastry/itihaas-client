import Footer from '@/components/elements/Footer';
import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import PrimaryHeader from '@/components/elements/PrimaryHeader';

function PrivacyPolicy() {
	return (
		<>
			<Navbar />
			<MainContainer>
				<PrimaryHeader>Privacy Policy</PrimaryHeader>
			</MainContainer>
			<Footer className="mt-36" />
		</>
	);
}

export default PrivacyPolicy;
