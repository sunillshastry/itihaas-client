interface FunctionProps {
	children: Readonly<React.ReactNode>;
	href: string;
}

function Link({ children, href }: FunctionProps) {
	return (
		<a
			href={href}
			className="text-primary-400 hover:text-primary-10 underline"
		>
			{children}
		</a>
	);
}

export default Link;
