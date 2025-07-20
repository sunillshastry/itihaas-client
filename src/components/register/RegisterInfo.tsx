import { Link } from 'react-router-dom';
import SubHeader from '../elements/SubHeader';
import Input from '../elements/Input';
import Label from '../elements/Label';
import TextArea from '../elements/TextArea';
import BasicButton from '../elements/BasicButton';
import { SubmitHandler, useForm } from 'react-hook-form';
import FormError from '../elements/FormError';
import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Intro from './Intro';
import Verifications from './Verifications';
import Concerns from './Concerns';
import PrivacyAndTerms from './PrivacyAndTerms';
import Contributing from './Contributing';
import Recovery from './Recovery';

interface FormInputs {
	name: string;
	email: string;
	usage?: string;
	privacyCheckbox: boolean;
}

interface Captcha {
	value: string | null;
	error: boolean;
}

function RegisterInfo() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInputs>();

	const [captchaState, setCaptchaState] = useState<Captcha>({
		value: null,
		error: false,
	});
	const captchaRef = useRef<ReCAPTCHA>(null);

	const onSubmit: SubmitHandler<FormInputs> = (data) => {
		setCaptchaState((current) => ({ ...current, error: false }));

		if (!captchaState.value) {
			setCaptchaState((current) => ({ ...current, error: true }));
			captchaRef.current?.reset();
			return;
		}

		console.log(captchaState);
		console.log('Successfully submitted form!');
		console.log(data);
		// TODO: Update onSubmit function
		// TODO: Make backend request for /register-api
	};

	return (
		<div className="text-primary-500 leading-8">
			<Intro />
			<Verifications />
			<Concerns />
			<PrivacyAndTerms />
			<Contributing />
			<Recovery />

			<div className="mt-7">
				<SubHeader>Obtain New API Key</SubHeader>
				<p className="mt-3 text-sm">
					Please use and submit the form below to gain access to your unique
					Itihaas API key.{' '}
					<span className="font-semibold">
						Your information is not shared with any third parties
					</span>
					.
				</p>
				<h5 className="text-primary-100 mt-1 text-sm font-bold uppercase">
					All fields marked with '*' are deemed required
				</h5>

				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="mt-6 flex flex-col items-start justify-start gap-1">
						<Label required={true}>Full Name</Label>
						<Input
							placeholder="John Doe"
							defaultValue=""
							className="max-sm:w-full"
							{...register('name', {
								required: {
									value: true,
									message: 'Full name is marked as a required field',
								},
								minLength: {
									value: 5,
									message:
										'Your full name must be at least five characters long',
								},
							})}
						/>
						{errors.name && <FormError>{errors.name.message}</FormError>}
					</div>

					<div className="mt-3 flex flex-col items-start justify-start gap-1">
						<Label required={true}>Email</Label>
						<Input
							type="email"
							placeholder="john.doe@example.com"
							defaultValue=""
							className="max-sm:w-full"
							{...register('email', {
								required: {
									value: true,
									message: 'Email is marked as a required field',
								},
								pattern: {
									value:
										/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
									message:
										'Invalid email address format. Please provide a valid address.',
								},
							})}
						/>
						{errors.email && <FormError>{errors.email.message}</FormError>}
					</div>

					<div className="mt-3 flex flex-col items-start justify-start gap-1">
						<Label>Reason for Usage</Label>
						<TextArea
							className="max-sm:w-full"
							defaultValue=""
							{...register('usage')}
						/>
					</div>

					<div className="mt-3">
						<div className="flex items-center justify-start gap-1 max-md:items-baseline">
							<input
								type="checkbox"
								id="register-privacy-check"
								className="text-primary-100 accent-primary-200 h-4 w-4 rounded-md focus:ring-2"
								{...register('privacyCheckbox', {
									required: {
										value: true,
										message:
											'You must check this box before submitting the form',
									},
								})}
							/>
							<Label
								className="text-xs"
								htmlFor="register-privacy-check"
								required={true}
							>
								I understand and accept the{' '}
								<Link
									to="/terms-of-service"
									className="hover:text-primary-20 underline"
								>
									Terms of Service
								</Link>{' '}
								and{' '}
								<Link
									to="/privacy"
									className="hover:text-primary-20 underline"
								>
									Privacy Policy
								</Link>{' '}
								regarding the use of my data and API access.
							</Label>
						</div>
						{errors.privacyCheckbox && (
							<FormError className="mt-1">
								{errors.privacyCheckbox.message}
							</FormError>
						)}
					</div>

					<div className="mt-3">
						<ReCAPTCHA
							ref={captchaRef}
							size="normal"
							theme="light"
							sitekey={import.meta.env.VITE_RECAPTCHA_V2_SITE_KEY}
							onChange={(value) =>
								setCaptchaState((current) => ({ ...current, value }))
							}
							onExpired={() => {
								setCaptchaState((current) => ({ ...current, value: null }));
								captchaRef?.current?.reset();
							}}
							onErrored={() => {
								setCaptchaState((current) => ({
									...current,
									value: null,
									error: true,
								}));
								captchaRef.current?.reset();
							}}
							onError={() => {
								setCaptchaState((current) => ({
									...current,
									value: null,
									error: true,
								}));
								captchaRef.current?.reset();
							}}
						/>
						{captchaState.error && (
							<FormError className="mt-2">
								Please complete the reCAPTCHA to continue
							</FormError>
						)}
					</div>

					<div className="mt-3">
						<BasicButton
							type="submit"
							className="font-semibold max-sm:block max-sm:w-full max-sm:py-3 max-sm:text-center"
						>
							Get API Key
						</BasicButton>
					</div>
				</form>
			</div>
		</div>
	);
}

export default RegisterInfo;
