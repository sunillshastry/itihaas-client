import { ChevronRight, Hash } from 'lucide-react';

interface FunctionProps {
	children?: Readonly<React.ReactNode>;
	id: string;
}

function TitleHeader({ children }: FunctionProps) {
	return (
		<h4 className="text-primary-500 group my-2 flex items-center gap-1 rounded-md py-2 text-lg font-medium">
			<span className="text-primary-10 pointer-events-none">
				<ChevronRight size={14} />
			</span>
			<span>{children}</span>

			<span className="opacity-0 transition ease-in group-hover:opacity-75">
				<Hash size={16} />
			</span>
		</h4>
	);
}

export default TitleHeader;
