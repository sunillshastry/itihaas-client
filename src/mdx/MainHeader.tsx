import { Hash } from 'lucide-react';

interface FunctionProps {
	children?: Readonly<React.ReactNode>;
	id?: string;
}

function MainHeader({ children }: FunctionProps) {
	return (
		<h3 className="bg-primary-40 text-primary-90 group flex items-center gap-2 rounded-md p-3 text-xl font-medium">
			<span>{children}</span>

			<span className="opacity-0 transition ease-in group-hover:opacity-75">
				<Hash size={16} />
			</span>
		</h3>
	);
}

export default MainHeader;
