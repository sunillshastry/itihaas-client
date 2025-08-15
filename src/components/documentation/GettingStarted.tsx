import { mdxComponents } from '@/mdx/config';
import HashContainer from '../elements/HashContainer';
import MDXTitle from '@/docs/title.mdx';
import MDXSubTitle from '@/docs/sub-title.mdx';
import MDXGettingStartedSectionOne from '@/docs/getting-started/viewing-and-accessing-documentation.mdx';
import MDXGettingStartedSectionTwo from '@/docs/getting-started/request-response-examples.mdx';
import MDXGettingStartedSectionThree from '@/docs/getting-started/api-registration.mdx';
import MDXGettingStartedSectionFour from '@/docs/getting-started/usage-and-other-guidelines.mdx';

function GettingStarted() {
	return (
		<>
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

				<div>
					<HashContainer id="api-registration">
						<MDXSubTitle
							components={mdxComponents}
							id="api-registration"
							name="API Registration"
						/>
					</HashContainer>
					<MDXGettingStartedSectionThree components={mdxComponents} />
				</div>

				<div>
					<HashContainer id="usage-and-other-guidelines">
						<MDXSubTitle
							components={mdxComponents}
							id="usage-and-other-guidelines"
							name="Usage and other guidelines"
						/>
					</HashContainer>
					<MDXGettingStartedSectionFour components={mdxComponents} />
				</div>
			</div>
		</>
	);
}

export default GettingStarted;
