interface FunctionProps {
	children: Readonly<React.ReactNode>;
}
function Blockquote({ children }: FunctionProps) {
	return (
		<blockquote className="border-primary-300 border-l-4">
			<span className="inline-block italic">{children}</span>
		</blockquote>
	);
}

export default Blockquote;
