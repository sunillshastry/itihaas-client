function Intro() {
	return (
		<>
			<p>
				Welcome to the <strong>Itihaas</strong> API Registration! This is your
				first step towards accessing and interacting with our public Itihaas
				API. For secure and authorized usage, all users are required to register
				for an API key. The API Key itself is free to use, however, a{' '}
				<strong>
					<u className="underline-offset-4">daily request limit of 100</u>
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
		</>
	);
}

export default Intro;
