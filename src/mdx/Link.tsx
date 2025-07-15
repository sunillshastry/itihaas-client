interface FunctionProps {
	children: Readonly<React.ReactNode>;
	href: string;
	title?: string;
}

function Link({ children, href, title }: FunctionProps) {
	return (
		<a
			href={href}
			className="text-primary-400 hover:text-primary-10 underline"
			title={title}
		>
			{children}
		</a>
	);
}

export default Link;
