import BackButton from '@/components/elements/BackButton';
import Footer from '@/components/elements/Footer';
import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import SubHeader from '@/components/elements/SubHeader';
import AccuracyBlockquote from '@/components/issues/AccuracyBlockquote';
import ApiContributionSection from '@/sections/ApiContributionSection';

function APIContribution() {
	return (
		<>
			<Navbar />
			<MainContainer>
				<div>
					<BackButton />
					<SubHeader>API and Documentation concerns</SubHeader>

					<p className="text-primary-600 mt-1 text-sm font-medium">
						Use this form to seek support from our team relating to the Itihaas
						API or any documentation specific queries.
					</p>
					<AccuracyBlockquote className="mt-4" />
				</div>
				<ApiContributionSection />
			</MainContainer>
			<Footer className="mt-36" />
		</>
	);
}

export default APIContribution;
