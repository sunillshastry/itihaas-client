import usePageURL from '@/hooks/usePageURL';
import { CircleCheck, Link } from 'lucide-react';
import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

function CopyURLButton() {
	const url = usePageURL();
	const [copied, setCopied] = useState<boolean>(false);

	return (
		<CopyToClipboard
			text={url}
			onCopy={() => {
				setCopied(true);
				setTimeout(() => setCopied(false), 600);
			}}
		>
			<button className="border-primary text-primary from-primary-80 to-primary-90 hover:text-primary-200 hover:border-primary-200 focus-visible:outline-primary-20 focus-visible::outline-2 flex items-center rounded-sm border bg-linear-to-r px-5 py-2 font-medium hover:cursor-pointer">
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
		</CopyToClipboard>
	);
}

export default CopyURLButton;
