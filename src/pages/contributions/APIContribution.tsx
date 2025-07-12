import Footer from '@/components/elements/Footer';
import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import SubHeader from '@/components/elements/SubHeader';

function APIContribution() {
	return (
		<>
			<Navbar />
			<MainContainer>
				<SubHeader>API and Documentation concerns</SubHeader>
			</MainContainer>
			<Footer className="mt-36" />
		</>
	);
}

export default APIContribution;
