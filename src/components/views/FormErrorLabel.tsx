import { ShieldAlert } from 'lucide-react';

interface FunctionProps {
	children: Readonly<React.ReactNode>;
}

export default function FormErrorLabel({ children }: FunctionProps) {
	return (
		<label className="text-primary-40 flex items-center justify-start gap-x-1 text-sm">
			<span>
				<ShieldAlert size={14} />
			</span>
			<span>{children}</span>
		</label>
	);
}
