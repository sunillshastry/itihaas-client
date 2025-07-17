import Footer from '@/components/elements/Footer';
import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import PrimaryHeader from '@/components/elements/PrimaryHeader';

function RecoverAPI() {
	return (
		<>
			<Navbar />
			<MainContainer>
				<PrimaryHeader>API Recovery</PrimaryHeader>
			</MainContainer>
			<Footer className="mt-36" />
		</>
	);
}

export default RecoverAPI;
