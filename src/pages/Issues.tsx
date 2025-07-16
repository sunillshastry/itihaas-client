import Footer from '@/components/elements/Footer';
import IssueInfo from '@/components/views/IssueInfo';
import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import PrimaryHeader from '@/components/elements/PrimaryHeader';
import IssueTypeLink from '@/components/issues/IssueTypeLink';
import SecondaryHeader from '@/components/elements/SecondaryHeader';

function Issues() {
	return (
		<>
			<Navbar />
			<MainContainer>
				<PrimaryHeader>Contribution Guide</PrimaryHeader>
				<IssueInfo />

				{/* <IssuesUserDetails /> */}
				{/* <IssuesSubjectDetails /> */}

				<div className="text-primary-400 mt-5">
					<div>
						<SecondaryHeader className="text-xl">
							Pick your relevant contributing option
						</SecondaryHeader>
						<p className="mt-2 font-medium italic">
							We appreciate your interest in improving the platform. Whether
							you've come across incorrect information, want to propose new
							additions, are experiencing issues with the API, or simply have
							ideas you'd like to share, you've come to the right place.
						</p>

						<p className="mt-2 font-medium italic">
							By choosing the relevant option below, you're helping us maintain
							the accuracy, reliability, and growth of our historical database
							and tools. Every contribution counts, and your input makes a
							direct impact on the quality of the experience we provide to all
							users.
						</p>
					</div>

					<IssueTypeLink
						title="New additions."
						linkContent="Propose a new entry"
						to="new"
					>
						Use this form if you'd like to propose the addition/updating of
						sub-fields within existing entities (dynasty, ruler and war), or add
						new entity (dynasty, ruler, war) or suggest new historical entities
						that are not yet available on the platform. We welcome well
						researched submissions that enhance our coverage of regional or
						lesser known historical narratives, ensuring a more inclusive and
						comprehensive resource for all users. Your submission will be
						reviewed by our team, and if approved, added to our growing dataset.
					</IssueTypeLink>

					<IssueTypeLink
						title="Missing or incorrect content?"
						linkContent="Report a correction"
						to="fix"
					>
						If you notice an error in existing content - such as broken links,
						outdated information, typos, or inaccurate data, please use this
						form to report it. This includes corrections related to dynasties,
						rulers, wars, or any other published entity. We strive to ensure all
						historical data is factual, consistent, and accessible. Your reports
						help us fix issues quickly and maintain the integrity of the
						platform.
					</IssueTypeLink>

					<IssueTypeLink
						title="API or Documentation concerns?"
						linkContent="Get API support"
						to="api"
					>
						This form is for developers, researchers, or users interacting with
						our public API. Whether you're running into bugs, facing
						documentation issues, or have ideas for enhancements, we'd love to
						hear from you. Your technical feedback allows us to make the API
						more reliable, intuitive, and useful for all who rely on it.
					</IssueTypeLink>

					<IssueTypeLink
						title="General feedback and ideas."
						linkContent="Leave your feedback"
						to="feedback"
					>
						If you'd like to leave a comment, share a new feature idea, provide
						feedback on usability, or even just tell us what you think about the
						project, this form is for you. Whether it's praise, constructive
						criticism, or curious questions, we value every message and use it
						to inform the ongoing development of the platform.
					</IssueTypeLink>
				</div>
			</MainContainer>
			<Footer className="mt-36" />
		</>
	);
}

export default Issues;
