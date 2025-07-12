import { Cog, MessagesSquare, ScrollText, UserPlus } from 'lucide-react';

import IssueInfoListItem from '@/components/views/IssueInfoListItem';

function IssueInfo() {
	return (
		<div className="text-primary-400 border-primary/25 mt-5 border-b pb-10">
			<p className="leading-8">
				At <strong>Itihaas</strong>, we are building a platform that values
				historical accuracy, community input, and shared knowledge. Whether
				you're a casual user, researcher, developer, or history enthusiast, your
				contributions help us maintain quality, fix errors, and grow our
				dataset. This page offers several ways to contribute: from reporting
				errors to suggesting new content or offering feedback. Every submission
				is reviewed with care, and your involvement is deeply appreciated.
			</p>

			<ul className="mt-3">
				<IssueInfoListItem
					icon={<Cog size={20} />}
					bolded="Fix"
					content="If you notice any incorrect data or broken links, whether
					internal or external - you can report them so we can correct them
					promptly."
				/>

				<IssueInfoListItem
					icon={<UserPlus size={20} />}
					bolded="New Additions"
					content="You can also submit requests to add new entities such
					as dynasties, rulers, or historical wars."
				/>

				<IssueInfoListItem
					icon={<ScrollText size={20} />}
					bolded="API Concerns"
					content="Found a problem or have suggestions related to the API
					or its documentation? Let us know! We value your input."
				/>

				<IssueInfoListItem
					icon={<MessagesSquare size={20} />}
					bolded="General Feedback"
					content="For anything else, including ideas, concerns, or
					comments about the platform, we would love to hear from you."
				/>
			</ul>
		</div>
	);
}

export default IssueInfo;
