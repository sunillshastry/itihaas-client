import postApiKeyRecovery from '@/api/postApiKeyRecovery';
import BasicButton from '@/components/elements/BasicButton';
import Footer from '@/components/elements/Footer';
import FormError from '@/components/elements/FormError';
import Input from '@/components/elements/Input';
import Label from '@/components/elements/Label';
import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import PrimaryHeader from '@/components/elements/PrimaryHeader';
import { useMutation } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

interface FormInputs {
	email: string;
}

function RecoverAPI() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormInputs>();

	const mutation = useMutation({
		mutationFn: postApiKeyRecovery,
		onSuccess: () => {
			reset();
		},
	});

	const onSubmit: SubmitHandler<FormInputs> = (data) => {
		mutation.mutate(data?.email);
	};

	return (
		<>
			<Navbar />
			<MainContainer>
				<PrimaryHeader>API Key Recovery</PrimaryHeader>
				<div className="text-primary mt-1 leading-8">
					<p>
						If you have promptly registered for an API key with a valid email
						address before, and have already verified your email previously, but
						for some reason, have misplaced or lost the API key, you can use the
						form below to submit a request to retrieve you API key securely.
					</p>

					<p className="mt-2">
						Ensure that you use the form below to provide your correct and{' '}
						<strong>verified</strong> email address below.{' '}
						<strong>
							Providing an invalid or unverified email address will not be
							accepted and won&apos;t help you recover your existing API key.
						</strong>
					</p>

					<p className="mt-1">
						If you wish to register for a new API key, then you must do so on
						our{' '}
						<Link
							to="/register"
							className="text-primary-600 hover:text-primary-10 underline"
						>
							API Registration
						</Link>{' '}
						page. Alternatively, if you have an existing email registered with
						Itihaas, and require to complete verification to use the Itihaas
						API, then you can use our{' '}
						<Link
							to="/api-resend"
							className="text-primary-600 hover:text-primary-10 underline"
						>
							API Resend Verification
						</Link>{' '}
						page to have a new verification code and link emailed to your
						corresponding email.
					</p>
				</div>

				<div className="mt-6">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="flex flex-col items-start justify-start gap-1">
							<Label
								required={true}
								htmlFor="api-recovery-email"
							>
								Email
							</Label>
							<Input
								placeholder="john.doe@example.com"
								id="api-recovery-email"
								defaultValue=""
								className="max-sm:w-full"
								disabled={mutation.isPending}
								// TODO: Include a better regex pattern for email matching ensuring only and exactly an email is validated
								{...register('email', {
									required: {
										value: true,
										message: 'Email is marked as a required field',
									},
									pattern: {
										value:
											/^[A-Za-z0-9_%+-]+(?:\.[A-Za-z0-9_%+-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,63}$/,
										message:
											'Invalid email address format. Please provide a valid email address',
									},
									validate: (value) => {
										const local = value.split('@')[0] ?? '';
										return (
											(value.length <= 254 && local.length <= 64) ||
											'Email address is too long.'
										);
									},
								})}
							/>
							{errors?.email && <FormError>{errors?.email?.message}</FormError>}
						</div>

						<div className="mt-3">
							{mutation.isSuccess && (
								<p className="text-primary-100 text-sm">
									If an <strong>account exists with the provided email</strong>{' '}
									and is <strong>verified</strong>, an email will be sent out
									containing the API key. Please check your email including the
									Spam folder.
								</p>
							)}

							<BasicButton
								type="submit"
								className="mt-2 font-semibold max-sm:block max-sm:w-full max-sm:py-3 max-sm:text-center"
								disabled={mutation.isPending}
							>
								{mutation.isPending ? 'Submitting...' : 'Recover Key'}
							</BasicButton>
						</div>
					</form>
				</div>
			</MainContainer>
			<Footer className="mt-36" />
		</>
	);
}

export default RecoverAPI;
