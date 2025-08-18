import BackButton from '@/components/elements/BackButton';
import Footer from '@/components/elements/Footer';
import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import SubHeader from '@/components/elements/SubHeader';
import AccuracyBlockquote from '@/components/issues/AccuracyBlockquote';
import AddNewContribution from '@/sections/AddNewContribution';

function NewContribution() {
	return (
		<>
			<Navbar />
			<MainContainer>
				<div>
					<BackButton />
					<SubHeader>New additions</SubHeader>
					<p className="text-primary-600 mt-1 text-sm font-medium">
						Use this form to recommend new entity additions or having any
						additional sub-fields within existing entities.
					</p>
					<AccuracyBlockquote className="mt-4" />
				</div>
				<AddNewContribution />
			</MainContainer>
			<Footer className="mt-36" />
		</>
	);
}

export default NewContribution;
