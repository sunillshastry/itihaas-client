// IssueTypeLink.tsx
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FunctionProps {
	title: string;
	linkContent: string;
	to: string;
	children?: Readonly<React.ReactNode>;
}

function IssueTypeLink({ title, linkContent, children, to }: FunctionProps) {
	return (
		<Link
			to={to}
			className="group border-primary-50 bg-primary-50 hover:bg-primary-60 my-6 block w-full max-w-full rounded-sm border p-3 shadow transition ease-in hover:cursor-pointer hover:shadow-lg"
		>
			<span className="border-primary/35 text-primary-500 block border-b text-lg font-medium">
				{title}
			</span>

			<div className="text-primary-500 mt-2 w-full max-w-full leading-7 break-words whitespace-normal italic">
				{children}
			</div>

			{/* Styled as a button, but still part of the Link */}
			<button
				className="bg-primary-700 text-primary-60 mt-4 flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs transition"
				role="none"
			>
				<span>{linkContent}</span>
				<span className="transition group-hover:translate-x-[3px]">
					<ArrowRight size={14} />
				</span>
			</button>
		</Link>
	);
}

export default IssueTypeLink;
