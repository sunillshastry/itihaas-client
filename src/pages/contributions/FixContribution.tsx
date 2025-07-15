import BackButton from '@/components/elements/BackButton';
import Footer from '@/components/elements/Footer';
import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import SubHeader from '@/components/elements/SubHeader';

function FixContribution() {
	return (
		<>
			<Navbar />
			<MainContainer>
				<BackButton />
				<SubHeader>Correcting outdated and incorrect content</SubHeader>
			</MainContainer>
			<Footer className="mt-36" />
		</>
	);
}

export default FixContribution;
