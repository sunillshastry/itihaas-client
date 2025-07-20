import Footer from '@/components/elements/Footer';
import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import PrimaryHeader from '@/components/elements/PrimaryHeader';
import { MDXProvider } from '@mdx-js/react';
import Sidebar from '@/components/documentation/Sidebar';
import GettingStarted from '@/components/documentation/GettingStarted';
import BasicButton from '@/components/elements/BasicButton';
import { useState } from 'react';
import { ScrollText } from 'lucide-react';

/**
 * Main React.JSX page component for /docs: Documentation page
 *
 * @returns The JSX for the documentations page
 */
function Docs() {
	const [isRefOpen, setIsRefOpen] = useState(false);

	function sidebarClick() {
		setIsRefOpen(false);
	}

	return (
		<>
			<Navbar />
			<MainContainer className="relative mx-0 flex items-start px-5 max-lg:mx-0 max-lg:px-2 max-md:mx-0 max-md:px-2">
				<BasicButton
					className="fixed top-5 right-5 z-50 min-xl:hidden"
					onClick={() => setIsRefOpen((current) => !current)}
				>
					<ScrollText />
				</BasicButton>

				<Sidebar
					refOpen={isRefOpen}
					sidebarClick={sidebarClick}
				/>
				<section className="ml-3 w-full max-xl:ml-0">
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
