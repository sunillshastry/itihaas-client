import { ChevronsRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from '../elements/Badge';
import SubHeader from '../elements/SubHeader';
import Input from '../elements/Input';
import Label from '../elements/Label';
import TextArea from '../elements/TextArea';
import BasicButton from '../elements/BasicButton';
import { SubmitHandler, useForm } from 'react-hook-form';
import FormError from '../elements/FormError';
import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

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
		if (!captchaState.value) {
			setCaptchaState((current) => ({ ...current, error: true }));
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
			<p>
				Welcome to the <strong>Itihaas</strong> API Registration! This is your
				first step towards accessing and interacting with our public Itihaas
				API. For secure and authorized usage, all users are required to register
				for an API key. The API Key itself is free to use, however, a{' '}
				<strong>
					<u>daily request limit of 100</u>
				</strong>{' '}
				is set to avoid API abuse, misuse and maintain server stability. The key
				uniquely identifies you as a user and allows us to manage request
				limits, monitor usage patterns, and ensure that our services remain
				fast, stable, and secure for everyone.{' '}
				<span className="font-medium">
					We highly recommend that you do not share your unique API keys with
					anyone. Please avoid exposing it in public Git repositories,
					environment files (publicly), or anywhere that is publicly accessible
					for misuse. The Itihaas API keys are sensitive credentials and should
					be treated like passwords. Unauthorized use of your key may lead to
					rate limiting, data abuse, or even revocation.
				</span>
			</p>

			<p className="mt-2">
				To ensure that all registrations are legitimate and secure, we have
				implemented several steps in our registration flow:
			</p>

			<div className="mt-4">
				<h4 className="flex items-center justify-start gap-1">
					<span className="text-primary">
						<ChevronsRight size={16} />
					</span>
					<span className="text-primary-600 text-lg font-medium">
						CAPTCHA (reCAPTCHA v2) Verification
					</span>
				</h4>

				<p className="mt-1 ml-5">
					Before your registration form is submitted, you will be asked to
					complete a short CAPTCHA test. This step helps us confirm that the
					request is being made by a human and not an automated bot. We
					primarily use CAPTCHA to prevent any potential span submissions,
					protect our systems and platforms from brute-force and scripted
					attacks, and most importantly ensure that real users are prioritized,
					protected, and served with the content they require. This process
					approximately takes only a few seconds and helps safeguard both you
					and our infrastructure.
				</p>
			</div>

			<div className="mt-4">
				<h4 className="flex items-center justify-start gap-1">
					<span className="text-primary">
						<ChevronsRight size={16} />
					</span>
					<span className="text-primary-600 text-lg font-medium">
						Email Verification
					</span>
				</h4>

				<p className="mt-1 ml-5">
					Upon submitting your information from the form below, you will receive
					a verification email at the email address you provided. This step adds
					an extra layer of verification and authenticity, which confirms that
					you own the email address and helps us prevent fake and/or incorrect
					registrations. This also helps us keep our systems clean without
					cluttering unregistered and unauthorized emails. To overcome this
					step, please provide a valid email to us in the form below, a
					verification email will appear on your inbox with a link provided,
					please click on the link. This will generate your API Key. Following
					this step, a second email will be sent to you containing your unique
					API Key. You can use this key for all your API requests.
				</p>

				<p className="border-primary-300 mt-3 ml-5 border-l-4 pl-2 italic">
					<strong>Important</strong>: If you do not see the verification or API
					key email, be sure to check your spam/junk folder. If issues persist,
					you can contact us for assistance. Any API related queries can be made{' '}
					<Link
						to="/issues/api"
						className="text-primary-600 hover:text-primary-10 underline"
					>
						here
					</Link>
					.
				</p>
			</div>

			<div className="mt-5">
				<h4 className="text-primary-600 text-lg font-medium">
					API and Documentation concerns
				</h4>

				<p>
					We strive to ensure that our API is reliable, well-documented, and
					easy to use for developers of all backgrounds. Our goal is to provide
					high-quality documentation that clearly explains every endpoint,
					parameter, data structure, and error response, covering both common
					use cases and edge scenarios. Likewise, we work hard to maintain high
					availability and uptime across all services so that your integration
					and applications remain stable and uninterrupted.
				</p>

				<p>
					However, we understand that no system is perfect. There may be
					occasional issues such as, unexpected or undocumented behavior from
					endpoints, or, outdated or missing information in the documentation,
					potential confusion around usage policies, authentication and rate
					limits. If you encounter any such issues, whether it is a bug,
					inconsistency, missing example, or just a general question about how
					something works, we genuinely appreciate hearing from you. Your
					feedback helps us improve the API and the platform for everyone.
					Please know that Itihaas is an open-source work in process and we are
					always trying to tackle problems coming our way. Your feedback speeds
					up the process of finding potential bugs, helping us overcome it
					faster. We look forward to hearing from you!
				</p>

				<p className="mt-1 font-medium">
					If you wish to contact us regarding our API or documentation, please
					use{' '}
					<Link
						to="/issues/api"
						className="text-primary-600 hover:text-primary-10 underline"
					>
						this form
					</Link>{' '}
					to contact us. Alternatively, if you want to give us your general
					feedback or any ideas, please use{' '}
					<Link
						to="/issues/feedback"
						className="text-primary-600 hover:text-primary-10 underline"
					>
						this form
					</Link>
					.{' '}
				</p>
			</div>

			<div className="mt-5">
				<h4 className="text-primary-600 text-lg font-medium">
					Privacy Policy and Terms of Service
				</h4>

				<p>
					By using our API and related services, you agree to abide by our{' '}
					<Link
						to="/terms-of-service"
						className="text-primary-600 hover:text-primary-10 underline"
					>
						Terms of Service
					</Link>{' '}
					and{' '}
					<Link
						to="/privacy"
						className="text-primary-600 hover:text-primary-10 underline"
					>
						Privacy Policy
					</Link>
					. These policies outline the rules for acceptable use, rate limits,
					content ownership, liability disclaimers, and user responsibilities.
					We are committed to protecting your privacy — any personal information
					you provide during registration (including name, email, or usage
					reason) is stored securely and used solely for managing access,
					support, and improving the API experience. We do not sell or share
					your data with third parties. Continued use of the API implies
					acceptance of these terms. If you wish to learn more about this,
					please review our full{' '}
					<Link
						to="/terms-of-service"
						className="text-primary-600 hover:text-primary-10 underline"
					>
						Terms of Service
					</Link>{' '}
					and{' '}
					<Link
						to="/terms-of-service"
						className="text-primary-600 hover:text-primary-10 underline"
					>
						Privacy Policy
					</Link>{' '}
					for detailed information.
				</p>
			</div>

			<div className="mt-5">
				<h4 className="text-primary-600 text-lg font-medium">
					Contributing to Itihaas{' '}
					<Badge className="p-1 px-1.5">Help wanted!</Badge>
				</h4>

				<p>
					At Itihaas, we welcome and appreciate all kinds of contributions to
					our platform — whether you are a developer, historian, researcher,
					student, or just someone passionate about preserving history.
					Contributions can include, but are not limited to, addition of new
					entities (such as dynasties, rulers, wars or something else), updating
					existing content, correcting inaccuracies, improving the user
					interface, enhancing the API structure or performance, or writing
					clearer, more comprehensive documentation. No contribution is too
					small — even fixing a typo or suggesting better structure helps move
					the project forward. If you're interested in helping shape the future
					of Itihaas, we would love to have you involved!
				</p>

				<p className="mt-1 font-medium">
					You can view the full guide about contributing to Itihaas{' '}
					<Link
						to="/issues"
						className="text-primary-600 hover:text-primary-10 underline"
					>
						here
					</Link>
					.
				</p>
			</div>

			<div className="mt-5">
				<SubHeader>Obtain API Key</SubHeader>
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
							defaultValue=""
							{...register('usage')}
						/>
					</div>

					<div className="mt-3">
						<div className="flex items-center justify-start gap-1">
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
							}}
							onError={() => {
								setCaptchaState((current) => ({
									...current,
									value: null,
									error: true,
								}));
							}}
						/>
						{captchaState.error && (
							<FormError className="mt-2">
								Please complete the reCAPTCHA to continue
							</FormError>
						)}
					</div>

					<div className="mt-3">
						<BasicButton type="submit">Get API Key</BasicButton>
					</div>
				</form>
			</div>
		</div>
	);
}

export default RegisterInfo;
