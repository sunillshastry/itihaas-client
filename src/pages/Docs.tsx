import Footer from '@/components/elements/Footer';
import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import PrimaryHeader from '@/components/elements/PrimaryHeader';
import { MDXProvider } from '@mdx-js/react';
import Sidebar from '@/components/documentation/Sidebar';
import MDXTitle from '@/docs/title.mdx';
import MDXSubTitle from '@/docs/sub-title.mdx';
import { mdxComponents } from '@/mdx/config';
import HashContainer from '@/components/elements/HashContainer';

// MDX Docs
import MDXGettingStartedSectionOne from '@/docs/getting-started/viewing-and-accessing-documentation.mdx';
import MDXGettingStartedSectionTwo from '@/docs/getting-started/request-response-examples.mdx';
/**
 * Main React.JSX page component for /docs: Documentation page
 *
 * @returns The JSX for the documentations page
 */
function Docs() {
	return (
		<>
			<Navbar />
			<MDXProvider>
				<MainContainer className="relative mx-0 flex items-start px-5">
					<Sidebar />

					<div className="ml-3 w-full">
						<PrimaryHeader>Documentation</PrimaryHeader>

						{/* Getting Started  */}
						<div className="mt-5">
							<HashContainer id="getting-started">
								<MDXTitle
									components={mdxComponents}
									id="getting-started"
									name="Getting Started"
								/>
							</HashContainer>

							<div>
								<HashContainer id="viewing-and-accessing-documentation">
									<MDXSubTitle
										components={mdxComponents}
										id="viewing-and-accessing-documentation"
										name="Viewing and accessing documentation"
									/>
								</HashContainer>
								<MDXGettingStartedSectionOne components={mdxComponents} />
							</div>

							<div>
								<HashContainer id="request-response-examples">
									<MDXSubTitle
										components={mdxComponents}
										id="request-response-examples"
										name="Request/Response Examples"
									/>
								</HashContainer>
								<MDXGettingStartedSectionTwo components={mdxComponents} />
							</div>
						</div>
					</div>
				</MainContainer>
			</MDXProvider>
			<Footer className="mt-36" />
		</>
	);
}

export default Docs;
