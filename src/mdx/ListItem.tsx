import { Dot } from 'lucide-react';

interface FunctionProps {
	children: Readonly<React.ReactNode>;
}
function ListItem({ children }: FunctionProps) {
	return (
		<li className="text-primary-400 flex items-center gap-1 leading-8">
			<span>
				<Dot />
			</span>
			<span>{children}</span>
		</li>
	);
}

export default ListItem;
