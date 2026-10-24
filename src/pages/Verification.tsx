import Footer from '@/components/elements/Footer';
import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import PrimaryHeader from '@/components/elements/PrimaryHeader';
import { useParams } from 'react-router-dom';

export default function Verification() {
	const { verificationCode } = useParams<{ verificationCode: string }>();

	console.log(verificationCode);

	return (
		<>
			<Navbar />
			<MainContainer>
				<PrimaryHeader>API Verification</PrimaryHeader>
				<section className="mt-14 text-center">
					<div>
						<h2 className="text-2xl font-medium">
							Your API has been successfully verified!
						</h2>
						<p className="text-primary mt-2">
							You can now use your Itihaas API key. Please ensure you follow the
							limits and other guidelines. Thank you for using the Itihaas API
						</p>
					</div>
				</section>
			</MainContainer>
			<Footer className="mt-36 max-md:mt-20" />
		</>
	);
}
