import { Link } from 'react-router-dom';

function Recovery() {
	return (
		<>
			<div className="mt-5">
				<h4 className="text-primary-600 text-lg font-semibold">API Recovery</h4>

				<p>
					If you have previously registered for an API key at Itihaas, and have
					lost the API key, misplaced it, or simply can't find it, do not worry.
					We have a dedicated section to help you recover it with ease, with
					minimal verification. Just provide us with the email address
					associated with your API key, and we will send you an email with the
					API key, if the email was initially registered with us. Please give it
					a couple of minutes and check your inbox for an email from Itihaas,
					check your spam folder if you do not receive the recovery email in
					under five minutes.
				</p>

				<p className="mt-1 font-medium">
					You can recover your API key and view more details about it{' '}
					<Link
						to="/api-recovery"
						className="text-primary-600 hover:text-primary-10 underline"
					>
						here
					</Link>
					.
				</p>

				<p className="mt-1 font-medium">
					For any concerns and issues regarding the API, please check our page{' '}
					<Link
						to="/issues/api"
						className="text-primary-600 hover:text-primary-10 underline"
					>
						here
					</Link>
					.
				</p>
			</div>
		</>
	);
}

export default Recovery;
