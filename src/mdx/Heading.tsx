interface FunctionProps {
	children: Readonly<React.ReactNode>;
}

function Heading({ children }: FunctionProps) {
	return <h5 className="text-primary-300 text-base font-medium">{children}</h5>;
}

export default Heading;
