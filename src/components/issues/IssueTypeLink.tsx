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
			className="border-primary-50 bg-primary-50 hover:bg-primary-60 group my-6 block rounded-sm border p-3 shadow transition ease-in hover:cursor-pointer hover:shadow-lg"
		>
			<h3 className="border-primary/35 border-b text-lg font-medium">
				{title}
			</h3>

			<p className="text-primary-100 mt-2 italic">{children}</p>

			<button className="bg-primary-700 text-primary-60 mt-4 flex cursor-pointer items-center gap-1 rounded-full px-2.5 py-0.5 text-xs transition">
				<span>{linkContent}</span>
				<span className="transition group-hover:translate-x-[3px]">
					<ArrowRight size={14} />
				</span>
			</button>
		</Link>
	);
}

export default IssueTypeLink;
