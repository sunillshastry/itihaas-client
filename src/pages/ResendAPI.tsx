import postApiKeyEmailResend from '@/api/postApiKeyEmailResend';
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

export default function ResendAPI() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormInputs>();

	const mutation = useMutation({
		mutationFn: postApiKeyEmailResend,
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
								disabled={mutation.isPending}
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
									and is <strong>not previously verified</strong>, an email will
									be sent out. Please check your email including the Spam folder
									and verify within fifteen minutes.
								</p>
							)}
							<BasicButton
								type="submit"
								disabled={mutation.isPending}
								className="mt-2 font-semibold max-sm:block max-sm:w-full max-sm:py-3 max-sm:text-center"
							>
								{mutation.isPending ? 'Submitting...' : 'Send Link'}
							</BasicButton>
						</div>
					</form>
				</div>
			</MainContainer>
			<Footer className="mt-36" />
		</>
	);
}
