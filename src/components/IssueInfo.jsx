import { Cog, MessagesSquare, ScrollText, UserPlus } from 'lucide-react';
import IssueInfoListItem from './IssueInfoListItem';

function IssueInfo() {
	return (
		<div className="text-primary-400 border-primary/25 mt-5 border-b pb-10">
			<p className="leading-8">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
				molestias qui exercitationem atque soluta et maiores veniam deleniti
				voluptatem. Consequatur deserunt voluptas delectus iure enim
				perspiciatis praesentium autem, alias voluptates id necessitatibus illum
				tenetur illo ex iusto. Earum id, mollitia asperiores nisi debitis
				doloremque iure ad minus alias consequuntur! Neque, sapiente voluptas!
				Corporis neque dolorem possimus id maiores quod velit?
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
