import { ClipboardCopy, MessageSquareQuote } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function CiteDropdown() {
	const [isCiteTabOpen, setIsCiteTabOpen] = useState(false);
	const citeTabRef = useRef(null);
	const citeBtnRef = useRef(null);

	useEffect(function () {
		function removeTabVisibility(e) {
			if (
				citeTabRef.current &&
				!citeTabRef.current.contains(e.target) &&
				citeBtnRef.current &&
				!citeBtnRef.current.contains(e.target)
			) {
				setIsCiteTabOpen(false);
			}
		}

		document.addEventListener('click', removeTabVisibility);
		return () => document.removeEventListener('click', removeTabVisibility);
	}, []);

	return (
		<div className="relative">
			<button
				ref={citeBtnRef}
				className="border-primary text-primary from-primary-80 to-primary-90 hover:text-primary-200 hover:border-primary-200 flex items-center rounded-sm border bg-linear-to-r px-5 py-2 font-medium hover:cursor-pointer"
				onClick={() => setIsCiteTabOpen((current) => !current)}
			>
				<span className="pointer-events-none">Cite Page</span>
				<span className="pointer-events-none ml-1">
					<MessageSquareQuote size={15} />
				</span>
			</button>

			{isCiteTabOpen && (
				<div
					ref={citeTabRef}
					className="bg-primary-90 after:border-r-primary-90 absolute -left-full mt-3 max-w-md -translate-x-0.5 rounded-xs p-3 shadow-md shadow-black/35 after:absolute after:top-[-10px] after:right-0 after:z-10 after:h-0 after:w-0 after:border-[10px] after:border-transparent after:content-['']"
				>
					<select>
						<option value="harvard">Harvard</option>
						<option value="chicago">Chicago</option>
						<option value="apa">APA</option>
					</select>
					<p className="text-primary-200 mt-2 text-sm font-medium italic">
						2025. Accessed May 24.
						https://chatgpt.com/c/6831127f-a370-8000-9fbd-f66069494e2e.
					</p>
					<div className="flex items-center">
						<button
							className="text-primary border-primary hover:text-primary-300 mt-2 rounded-sm border bg-white p-1 hover:cursor-pointer"
							title="Copy Citation"
						>
							<ClipboardCopy size={18} />
						</button>
						<label className="text-primary mt-2 ml-1 hidden text-xs font-bold uppercase">
							Copied!
						</label>
					</div>
				</div>
			)}
		</div>
	);
}

export default CiteDropdown;
