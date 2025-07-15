interface FunctionProps {
	children: Readonly<React.ReactNode>;
}

function Code({ children }: FunctionProps) {
	return (
		<code className="bg-primary-90 rounded-sm p-1 text-xs">{children}</code>
	);
}

export default Code;
