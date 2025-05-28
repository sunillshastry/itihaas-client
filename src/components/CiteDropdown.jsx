import { ClipboardCopy, MessageSquareQuote } from 'lucide-react';
import { useEffect, useState } from 'react';
import CiteListDropdown from './CiteListDropdown';

function CiteDropdown() {
	const [isCiteTabOpen, setIsCiteTabOpen] = useState(false);

	useEffect(
		function () {
			function hideCiteTab(e) {
				if (e.key === 'Escape' || (e.code === 'Escape' && isCiteTabOpen)) {
					setIsCiteTabOpen(false);
				}
			}

			document.addEventListener('keyup', hideCiteTab);

			return () => document.removeEventListener('keyup', hideCiteTab);
		},
		[isCiteTabOpen]
	);

	function onOptionChange(e) {
		const value = e?.value || 'mla';
		console.log(value);
	}

	return (
		<div className="relative">
			<button
				className="border-primary text-primary from-primary-80 to-primary-90 hover:text-primary-200 hover:border-primary-200 focus-visible:outline-primary-20 focus-visible::outline-2 flex items-center rounded-sm border bg-linear-to-r px-5 py-2 font-medium hover:cursor-pointer"
				onClick={() => setIsCiteTabOpen((current) => !current)}
			>
				<span className="pointer-events-none">Cite Page</span>
				<span className="pointer-events-none ml-1">
					<MessageSquareQuote size={15} />
				</span>
			</button>

			{isCiteTabOpen && (
				<div className="bg-primary-90 after:border-r-primary-90 absolute -left-full mt-3 max-w-md -translate-x-0.5 rounded-xs p-3 shadow-md shadow-black/35 after:absolute after:top-[-10px] after:right-0 after:z-10 after:h-0 after:w-0 after:border-[10px] after:border-transparent after:content-['']">
					<CiteListDropdown onChange={onOptionChange} />

					<p className="text-primary-200 mt-2 text-sm font-medium italic">
						Citation
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
