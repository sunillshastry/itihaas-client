import Footer from '@/components/elements/Footer';
import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import SubHeader from '@/components/elements/SubHeader';

function FeedbackContribution() {
	return (
		<>
			<Navbar />
			<MainContainer>
				<SubHeader>General feedback and ideas</SubHeader>
			</MainContainer>
			<Footer className="mt-36" />
		</>
	);
}

export default FeedbackContribution;
