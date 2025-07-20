import Footer from '@/components/elements/Footer';
import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import PrimaryHeader from '@/components/elements/PrimaryHeader';
import { MDXProvider } from '@mdx-js/react';
import Sidebar from '@/components/documentation/Sidebar';
import GettingStarted from '@/components/documentation/GettingStarted';

/**
 * Main React.JSX page component for /docs: Documentation page
 *
 * @returns The JSX for the documentations page
 */
function Docs() {
	return (
		<>
			<Navbar />
			<MainContainer className="relative mx-0 flex items-start px-5">
				<Sidebar />
				<section className="ml-3 w-full">
					<PrimaryHeader>Documentation</PrimaryHeader>

					<MDXProvider>
						{/* Getting Started  */}
						<GettingStarted />
					</MDXProvider>
				</section>
			</MainContainer>
			<Footer className="mt-36" />
		</>
	);
}

export default Docs;
