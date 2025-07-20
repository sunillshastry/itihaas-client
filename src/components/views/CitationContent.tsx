import PropTypes from 'prop-types';
import { ClipboardCopy } from 'lucide-react';
import CiteListDropdown from '@/components/views/CiteListDropdown';
import { ActionMeta, SingleValue } from 'react-select';
import useCopy from '@/hooks/useCopy';

interface DropdownOption {
	value: string;
	label: string;
}
interface FunctionProps {
	citation: string;
	onOptionChange: (
		newValue: SingleValue<DropdownOption>,
		actionMeta: ActionMeta<DropdownOption>
	) => void;
}

function CitationContent({ citation, onOptionChange }: FunctionProps) {
	const [copied, copy] = useCopy();

	return (
		<div className="bg-primary-90 after:border-r-primary-90 citation-tab absolute mt-3 min-w-2xs rounded-xs p-3 shadow-md shadow-black/35 after:absolute after:top-[-10px] after:right-0 after:z-10 after:h-0 after:w-0 after:border-[10px] after:border-transparent after:content-['']">
			<CiteListDropdown onChange={onOptionChange} />

			<p className="text-primary-200 mt-2 text-sm font-medium italic">
				{citation}
			</p>
			<div className="flex items-center">
				<button
					className="text-primary border-primary hover:text-primary-300 mt-2 rounded-sm border bg-white p-1 hover:cursor-pointer"
					title="Copy Citation"
					onClick={() => copy(citation)}
				>
					<ClipboardCopy size={18} />
				</button>
				{copied && (
					<label className="text-primary mt-2 ml-1 text-xs font-bold uppercase">
						Copied!
					</label>
				)}
			</div>
		</div>
	);
}

CitationContent.propTypes = {
	citation: PropTypes.string.isRequired,
	onOptionChange: PropTypes.func.isRequired,
};

export default CitationContent;
