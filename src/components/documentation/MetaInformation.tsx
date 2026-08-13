import { mdxComponents } from '@/mdx/config';
import HashContainer from '../elements/HashContainer';
import MDXTitle from '@/docs/title.mdx';
import MDXSubTitle from '@/docs/sub-title.mdx';
import MDXApiHealthCheckSection from '@/docs/meta-information/api-health-check.mdx';
import MDXApiVersion from '@/docs/meta-information/api-version.mdx';

export default function MetaInformation() {
	return (
		<>
			<div className="mt-5">
				<HashContainer id="meta-information">
					<MDXTitle
						components={mdxComponents}
						id="meta-information"
						name="Meta Information"
					></MDXTitle>
				</HashContainer>

				<div>
					<HashContainer id="api-health-check">
						<MDXSubTitle
							components={mdxComponents}
							id="api-health-check"
							name="Health Check"
						/>
					</HashContainer>

					<MDXApiHealthCheckSection components={mdxComponents} />
				</div>

				<div>
					<HashContainer id="api-version">
						<MDXSubTitle
							components={mdxComponents}
							id="api-version"
							name="API Version"
						/>
					</HashContainer>

					<MDXApiVersion components={mdxComponents} />
				</div>
			</div>
		</>
	);
}
