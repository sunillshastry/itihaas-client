import useCopy from '@/hooks/useCopy';
import usePageURL from '@/hooks/usePageURL';
import { CircleCheck, Link } from 'lucide-react';

function CopyURLButton() {
	const url = usePageURL();
	const [copied, copy] = useCopy();

	return (
		<>
			<button
				className="border-primary text-primary from-primary-80 to-primary-90 hover:text-primary-200 hover:border-primary-200 focus-visible:outline-primary-20 focus-visible::outline-2 flex items-center rounded-sm border bg-linear-to-r px-5 py-2 font-medium hover:cursor-pointer"
				onClick={() => copy(url)}
			>
				{copied ? (
					<>
						<span className="pointer-events-none">Copied!</span>
						<span className="pointer-events-none ml-1">
							<CircleCheck size={16} />
						</span>
					</>
				) : (
					<>
						<span className="pointer-events-none">Copy URL</span>
						<span className="pointer-events-none ml-1">
							<Link size={15} />
						</span>
					</>
				)}
			</button>
		</>
	);
}

export default CopyURLButton;
