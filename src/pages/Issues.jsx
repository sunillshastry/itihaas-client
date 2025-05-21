import Footer from '../components/Footer';
import IssueInfo from '../components/IssueInfo';
import IssuesUserDetails from '../components/IssuesUserDetails';
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

				<IssuesUserDetails />
			</MainContainer>
			<Footer />
		</>
	);
}

export default Issues;
