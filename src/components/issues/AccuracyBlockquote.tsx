import { CircleAlert } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface FunctionProps {
	className?: string;
}

export default function AccuracyBlockquote({ className }: FunctionProps) {
	return (
		<div
			className={twMerge(
				'bg-primary-50 text-primary-400 flex items-center justify-start gap-x-3 rounded-lg px-5 py-3 shadow-xs',
				className
			)}
		>
			<div>
				<span>
					<CircleAlert />
				</span>
			</div>
			<div>
				<p className="italic">
					Please ensure all relevant and required fields are filled. Try your
					best to provide us with accurate and credible information (with
					sources). Any irrelevant or uncredited content will be discarded
				</p>
			</div>
		</div>
	);
}
