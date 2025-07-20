import { ChevronsRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Verifications() {
	return (
		<>
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
					you can contact us for assistance. Any API related queries can be made
					on the{' '}
					<Link
						to="/issues/api"
						className="text-primary-600 hover:text-primary-10 underline"
					>
						issues page
					</Link>
					.
				</p>
			</div>
		</>
	);
}

export default Verifications;
