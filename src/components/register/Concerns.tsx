import { Link } from 'react-router-dom';

function Concerns() {
	return (
		<>
			<div className="mt-5">
				<h4 className="text-primary-600 text-lg font-semibold">
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
					use the{' '}
					<Link
						to="/issues/api"
						className="text-primary-600 hover:text-primary-10 underline"
					>
						API form
					</Link>{' '}
					to contact us. Alternatively, if you want to give us your general
					feedback or any ideas, please use our{' '}
					<Link
						to="/issues/feedback"
						className="text-primary-600 hover:text-primary-10 underline"
					>
						feedback form
					</Link>
					.{' '}
				</p>
			</div>
		</>
	);
}

export default Concerns;
