import { Highlight, PrismTheme } from 'prism-react-renderer';
import '@/styles/codeblock-theme.css';
import { Check, Copy } from 'lucide-react';
import useCopy from '@/hooks/useCopy';

interface FunctionProps {
	children: Readonly<React.ReactNode> | string;
	className?: string;
	language: string;
	copy: boolean;
}

function CodeBlock({
	children,
	language = 'text',
	copy = true,
}: FunctionProps) {
	const emptyDefaultTheme = {
		plain: [],
		styles: [],
	} as PrismTheme;

	const [copied, copyFn] = useCopy();

	return (
		<div className="my-2 max-w-full overflow-x-scroll">
			<Highlight
				theme={emptyDefaultTheme}
				language={language}
				code={children as string}
			>
				{({ style, tokens, getLineProps, getTokenProps }) => (
					<div className="relative">
						{copy && (
							<button
								className="bg-primary-40 text-primary-700 hover:bg-primary-60 absolute top-2 right-2 z-40 rounded-md p-1.5 transition ease-in hover:cursor-pointer"
								onClick={() => copyFn(children as string)}
							>
								{copied ? <Check size={18} /> : <Copy size={18} />}
							</button>
						)}
						<pre
							style={style}
							className="bg-primary-90 relative overflow-x-auto rounded-md p-3 text-sm shadow-sm"
						>
							{tokens.map((line, i) => (
								<div
									key={i}
									{...getLineProps({ line })}
								>
									{line.map((token, key) => (
										<span
											key={key}
											{...getTokenProps({ token })}
										/>
									))}
								</div>
							))}
						</pre>
					</div>
				)}
			</Highlight>
		</div>
	);
}

export default CodeBlock;
