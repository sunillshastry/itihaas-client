import { Link } from 'react-router-dom';

function PrivacyAndTerms() {
	return (
		<>
			<div className="mt-5">
				<h4 className="text-primary-600 text-lg font-semibold">
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
		</>
	);
}

export default PrivacyAndTerms;
