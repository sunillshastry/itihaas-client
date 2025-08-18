import BackButton from '@/components/elements/BackButton';
import Footer from '@/components/elements/Footer';
import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import SubHeader from '@/components/elements/SubHeader';
import AccuracyBlockquote from '@/components/issues/AccuracyBlockquote';
import EditContribution from '@/sections/EditContribution';

function FixContribution() {
	return (
		<>
			<Navbar />
			<MainContainer>
				<div>
					<BackButton />
					<SubHeader>Fixing missing and incorrect content</SubHeader>
					<p className="text-primary-600 mt-1 text-sm font-medium">
						Use this form to make requests to correct and add content to
						existing (missing) fields. We request you use this form to make
						requests to edit content for a single field per entity.
					</p>
					<AccuracyBlockquote className="mt-4" />
				</div>
				<EditContribution />
			</MainContainer>
			<Footer className="mt-36" />
		</>
	);
}

export default FixContribution;
