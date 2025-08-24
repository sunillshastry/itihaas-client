import Footer from '@/components/elements/Footer';
import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import PrimaryHeader from '@/components/elements/PrimaryHeader';

export default function ResendAPI() {
	return (
		<>
			<Navbar />
			<MainContainer>
				<PrimaryHeader>Resend Verification Link</PrimaryHeader>
				<p>
					On this page, you will find resources to help you get your API Key
					through a new verification link with your previously registered email
					address.
				</p>
			</MainContainer>
			<Footer className="mt-36" />
		</>
	);
}
