import { ArrowRight } from 'lucide-react';

import BasicButton from './BasicButton';
import IssueEntryField from './IssueEntryField';

function IssuesSubjectDetails() {
	return (
		<section className="mt-6">
			<div>
				<h2 className="font-heading text-primary-400 text-xl">Issue Details</h2>
				<p className="text-primary-400/60 text-sm">
					Specific information about the issue itself. Please try to be as
					precise as possible, and make sure to provide credible and sourced
					solution(s). Fields marked with * are required
				</p>
			</div>

			<div className="mt-5">
				<IssueEntryField
					label="title"
					required={true}
					variant="large"
				/>

				<IssueEntryField
					label="link"
					className="mt-6"
					required={true}
					variant="large"
				/>

				<IssueEntryField
					label="description"
					className="mt-6"
					textarea={true}
				/>

				<IssueEntryField
					label="answer"
					className="mt-6"
					required={true}
					textarea={true}
				/>
				<IssueEntryField
					label="sources, articles and other resources..."
					className="mt-6"
					required={true}
					textarea={true}
				/>
			</div>
			<BasicButton className="mt-5">
				<span>Submit</span>
				<span className="ml-1">
					<ArrowRight size={16} />
				</span>
			</BasicButton>
		</section>
	);
}

export default IssuesSubjectDetails;
