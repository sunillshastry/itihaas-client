import { Highlight, PrismTheme } from 'prism-react-renderer';
import '@/styles/codeblock-theme.css';
import { Copy, CopyCheck } from 'lucide-react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useState } from 'react';

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

	const [copied, setCopied] = useState<boolean>(false);

	function handleCopyClick() {
		setCopied(true);
		setTimeout(function () {
			setCopied(false);
		}, 1500);
	}

	return (
		<div className="my-2 overflow-x-scroll">
			<Highlight
				theme={emptyDefaultTheme}
				language={language}
				code={children as string}
			>
				{({ style, tokens, getLineProps, getTokenProps }) => (
					<pre
						style={style}
						className="bg-primary-90 relative rounded-md p-3 text-sm shadow-sm"
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
						{copy && (
							<CopyToClipboard text={children as string}>
								<button
									className="bg-primary-50 text-primary-700 hover:bg-primary-60 absolute top-2 right-2 rounded-md p-1.5 transition ease-in hover:cursor-pointer"
									onClick={handleCopyClick}
								>
									{copied ? <CopyCheck size={18} /> : <Copy size={18} />}
								</button>
							</CopyToClipboard>
						)}
					</pre>
				)}
			</Highlight>
		</div>
	);
}

// <div
// 	className={twMerge(
// 		'bg-primary-90 relative my-1 rounded-md px-3 py-5 text-sm shadow-sm',
// 		className
// 	)}
// >
// 	<button className="bg-primary-60 hover:bg-primary-50 absolute top-1.5 right-1.5 rounded-md p-2 hover:cursor-pointer">
// 		<Copy size={16} />
// 	</button>

// 	<pre>
// 		<code>{children}</code>
// 	</pre>
// </div>

export default CodeBlock;
