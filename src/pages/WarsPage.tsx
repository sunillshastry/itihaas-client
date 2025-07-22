import BuildingContentBanner from '@/components/elements/BuildingContentBanner';
import Footer from '@/components/elements/Footer';
import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import PrimaryHeader from '@/components/elements/PrimaryHeader';

function WarsPage() {
	return (
		<>
			<Navbar />
			<MainContainer>
				<PrimaryHeader>Wars</PrimaryHeader>
				<BuildingContentBanner />
			</MainContainer>
			<Footer className="mt-36" />
		</>
	);
}

export default WarsPage;
