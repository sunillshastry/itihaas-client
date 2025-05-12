import { ArrowBigUpDash } from 'lucide-react';
import { useEffect, useState } from 'react';

function BackToTopButton() {
	const [visible, setVisible] = useState(false);

	function toggleVisibility() {
		if (window.scrollY > window.innerHeight) {
			setVisible(true);
		} else {
			setVisible(false);
		}
	}

	function scrollBackUp() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}

	useEffect(function () {
		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	return (
		visible && (
			<button
				onClick={scrollBackUp}
				className="bg-primary-500 text-primary-50 hover:bg-primary-700 focus:outline-primary-30 fixed right-5 bottom-5 z-50 flex items-center rounded-sm px-3 py-2 text-sm hover:cursor-pointer focus:outline-3"
			>
				<span>Scroll Up</span>
				<span className="ml-1">
					<ArrowBigUpDash />
				</span>
			</button>
		)
	);
}

export default BackToTopButton;
