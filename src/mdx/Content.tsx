interface FunctionProps {
	children: Readonly<React.ReactNode> | string;
}

function Content({ children }: FunctionProps) {
	return <p className="text-primary-400 mt-1 px-3 leading-8">{children}</p>;
}

export default Content;
