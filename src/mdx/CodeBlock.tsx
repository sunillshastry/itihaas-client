import { Highlight, PrismTheme } from 'prism-react-renderer';
import '@/styles/codeblock-theme.css';
import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Check, Copy } from 'lucide-react';

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
		}, 1000);
	}

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
							<CopyToClipboard text={children as string}>
								<button
									className="bg-primary-40 text-primary-700 hover:bg-primary-60 absolute top-2 right-2 z-40 rounded-md p-1.5 transition ease-in hover:cursor-pointer"
									onClick={handleCopyClick}
								>
									{copied ? <Check size={18} /> : <Copy size={18} />}
								</button>
							</CopyToClipboard>
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
