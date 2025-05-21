import Footer from '../components/Footer';
import IssueInfo from '../components/IssueInfo';
import MainContainer from '../components/MainContainer';
import Navbar from '../components/Navbar';
import PrimaryHeader from '../components/PrimaryHeader';

function Issues() {
	return (
		<>
			<Navbar />
			<MainContainer>
				<PrimaryHeader>Submit Issue</PrimaryHeader>
				<IssueInfo />
			</MainContainer>
			<Footer />
		</>
	);
}

export default Issues;
