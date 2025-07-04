import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function MissingInfoDialog() {
	const navigate = useNavigate();

	return (
		<div className="bg-primary-400 mt-10 rounded-sm px-6 py-4">
			<h3 className="font-heading text-primary-90 text-xl">
				Spot any incorrect or missing information?
			</h3>

			<p className="text-primary-80 mt-2 text-base leading-8">
				Help improve the quality of <strong>Itihaas</strong> and its contents by
				filling in any missing information you&apos;ve noticed. Whether
				it&apos;s a small detail, a broken link, or missing information, your
				contributions ensure the content stays accurate, up-to-date, credible
				and useful for everyone. If you have relevant insights, sources, or
				updates, feel free to submit an issue. Every update makes a difference
				and helps others get the full picture. Thank you for being a part of
				keeping this platform informative and complete!
			</p>

			<button
				className="from-primary-50 to-primary-30 text-primary-900 mt-6 flex items-center justify-center rounded-sm bg-linear-to-b px-2 py-2 text-sm hover:cursor-pointer"
				onClick={() => navigate('/issues')}
			>
				<span>Submit Issue</span>
				<span className="ml-1">
					<ArrowRight size={15} />
				</span>
			</button>
		</div>
	);
}

export default MissingInfoDialog;
