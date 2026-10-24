import BasicButton from '@/components/elements/BasicButton';
import Footer from '@/components/elements/Footer';
import FormError from '@/components/elements/FormError';
import Input from '@/components/elements/Input';
import Label from '@/components/elements/Label';
import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import PrimaryHeader from '@/components/elements/PrimaryHeader';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

interface FormInputs {
	email: string;
}

export default function ResendAPI() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInputs>();

	const onSubmit: SubmitHandler<FormInputs> = (data) => {
		// TODO: Include the actual implementation to send the request to the backend API for new verification email
		console.log(
			'Successfully sent the request to send email verification link!'
		);
		console.log(data);
	};

	return (
		<>
			<Navbar />
			<MainContainer>
				<PrimaryHeader>Resend Verification Link</PrimaryHeader>
				<div className="text-primary mt-1 leading-8">
					<p>
						If you have already previously registered for an API key with an
						email, and for any reason, you did not verify your email{' '}
						<span className="italic">
							(upon registration, an email is sent out with a verification code
							that is valid for exactly 15 minutes)
						</span>
						; you can use this resource to have a new verification code sent to
						your registered email. Please enter your valid and registered email
						address in the form below, and you should receive the relevant
						verification code and link within a few minutes - be sure to check
						the spam folder as well.
					</p>

					<p className="mt-2 font-medium">
						Please note that if the provided email address is not registered
						previously with Itihaas, then you will be required to first
						register, and the corresponding email will automatically be sent to
						the address. You can register for a new API key using our{' '}
						<Link
							to="/register"
							className="text-primary-600 hover:text-primary-10 underline"
						>
							API Registration
						</Link>
						&nbsp;page.
					</p>

					<p className="mt-2">
						Alternatively, if you have already previously registered for an API
						key with a specific email address, and you have also verified your
						email address, but have misplaced your API key, you can use our{' '}
						<Link
							to="/api-recovery"
							className="text-primary-600 hover:text-primary-10 underline"
						>
							API Recovery
						</Link>
						&nbsp;service page
					</p>
				</div>

				<div className="mt-6">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="flex flex-col items-start justify-start gap-1">
							<Label
								required={true}
								htmlFor="api-resend-email"
							>
								Email
							</Label>
							<Input
								placeholder="john.doe@example.com"
								defaultValue=""
								className="max-sm:w-full"
								id="api-resend-email"
								// TODO: Include a better regex pattern for email matching ensuring only and exactly an email is validated
								{...register('email', {
									required: {
										value: true,
										message: 'Email is marked as a required field',
									},
									pattern: {
										value:
											/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
										message:
											'Invalid email address format. Please provide a valid email address',
									},
								})}
							/>
							{errors?.email && <FormError>{errors?.email?.message}</FormError>}
						</div>

						<BasicButton
							type="submit"
							className="mt-4 font-semibold max-sm:block max-sm:w-full max-sm:py-3 max-sm:text-center"
						>
							Send Link
						</BasicButton>
					</form>
				</div>
			</MainContainer>
			<Footer className="mt-36" />
		</>
	);
}
