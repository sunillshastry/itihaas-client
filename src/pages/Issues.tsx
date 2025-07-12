import Footer from '@/components/elements/Footer';
import IssueInfo from '@/components/views/IssueInfo';
import IssuesSubjectDetails from '@/components/views/IssuesSubjectDetails';
import IssuesUserDetails from '@/components/views/IssuesUserDetails';
import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import PrimaryHeader from '@/components/elements/PrimaryHeader';

function Issues() {
	return (
		<>
			<Navbar />
			<MainContainer>
				<PrimaryHeader>Contribution Guide</PrimaryHeader>
				<IssueInfo />

				<IssuesUserDetails />
				<IssuesSubjectDetails />
			</MainContainer>
			<Footer className="mt-36" />
		</>
	);
}

export default Issues;
