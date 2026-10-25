import postApiKeyVerification from '@/api/postApiKeyVerification';
import Footer from '@/components/elements/Footer';
import Loader from '@/components/elements/Loader';
import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import PrimaryHeader from '@/components/elements/PrimaryHeader';
import { useQuery } from '@tanstack/react-query';
import { BadgeCheck, CircleX } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export default function Verification() {
	const { verificationCode } = useParams<{ verificationCode: string }>();

	const { isPending, isSuccess, data } = useQuery({
		queryKey: ['api-verify', verificationCode],
		queryFn: () => postApiKeyVerification(verificationCode as string),
		enabled: !!verificationCode,
		retry: false,
		staleTime: Infinity,
		refetchOnWindowFocus: false,
	});

	const verified = data?.success;

	return (
		<>
			<Navbar />
			<MainContainer>
				<PrimaryHeader>API Verification</PrimaryHeader>
				<section className="mt-14 text-center">
					{isPending ? (
						<div>
							<Loader size="large" />
						</div>
					) : (
						<div>
							<h2 className="text-2xl font-medium">
								{verified && isSuccess ? (
									<span className="flex items-center justify-center gap-x-2">
										<span>Your API Key has been verified successfully!</span>
										<span>
											<BadgeCheck
												color="#cab4a3"
												fill="#4a3423"
											/>
										</span>
									</span>
								) : (
									<span className="flex items-center justify-center gap-x-2">
										<span>Your verification code has expired!</span>
										<span>
											<CircleX
												color="#cab4a3"
												fill="#4a3423"
											/>
										</span>
									</span>
								)}
							</h2>
							<p className="text-primary mt-2 leading-8">
								{verified && isSuccess ? (
									<span>
										Please check your email (including the Spam folder) for an
										email from Itihaas, containing your new API key. You can now
										use your Itihaas API key provided that you follow the limits
										and other guidelines mentioned on{' '}
										<Link
											to="/docs/#usage-and-other-guidelines"
											className="text-primary-200 font-medium underline"
										>
											guidelines
										</Link>{' '}
										page. Thank you for using the Itihaas API.
									</span>
								) : (
									<span>
										Your Itihaas API verification code has expired. You do not
										need to register again, instead, you can request a new
										verification code and link using our{' '}
										<Link
											to="/api-resend"
											className="text-primary-200 font-medium underline"
										>
											Resend Verification
										</Link>{' '}
										service. If you have previously registered and verified your
										email, but have misplaced your API key, you can use our{' '}
										<Link
											to="/api-recovery"
											className="text-primary-200 font-medium underline"
										>
											API Key Recovery
										</Link>{' '}
										form.
									</span>
								)}
							</p>
						</div>
					)}
				</section>
			</MainContainer>
			<Footer className="mt-36 max-md:mt-20" />
		</>
	);
}
