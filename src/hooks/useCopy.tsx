import { useCopyToClipboard } from '@uidotdev/usehooks';
import { useState } from 'react';

function useCopy(duration: number = 1500) {
	const [copied, setCopied] = useState<boolean>(false);
	const [_, copyToClipboard] = useCopyToClipboard();

	function copy(text: string) {
		setCopied(false);
		copyToClipboard(text);
		setCopied(true);
		setTimeout(function () {
			setCopied(false);
		}, duration);
	}

	return [copied, copy] as const;
}

export default useCopy;
