import BackButton from '@/components/elements/BackButton';
import Footer from '@/components/elements/Footer';
import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import SubHeader from '@/components/elements/SubHeader';
import AccuracyBlockquote from '@/components/issues/AccuracyBlockquote';
import { GeneralFeedbackInputs } from '@/interfaces/GeneralFeedbackInputs';
import FeedbackSection from '@/sections/FeedbackSection';
import { SubmitHandler, useForm } from 'react-hook-form';

function FeedbackContribution() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<GeneralFeedbackInputs>();

	const feedbackSubmitForm: SubmitHandler<GeneralFeedbackInputs> = (data) => {
		console.log(data);
		// TODO: Make a request to backend to send this form details
	};

	return (
		<>
			<Navbar />
			<MainContainer>
				<div>
					<BackButton />
					<SubHeader>General Feedback and Ideas</SubHeader>

					<p className="text-primary-600 mt-1 text-sm font-medium">
						For any general suggestions or constructive feedback regarding the
						Itihaas platform, please use the form below to state and provide
						your comments.
					</p>

					<AccuracyBlockquote className="mt-4" />
				</div>

				<form onSubmit={handleSubmit(feedbackSubmitForm)}>
					<FeedbackSection
						register={register}
						errors={errors}
					/>
				</form>
			</MainContainer>
			<Footer className="mt-36" />
		</>
	);
}

export default FeedbackContribution;
