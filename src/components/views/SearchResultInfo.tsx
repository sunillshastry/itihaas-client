import { BookOpenText, Newspaper, ScrollText } from 'lucide-react';

interface FunctionProps {
	sources: number;
	articles: number;
	readings: number;
}

function SearchResultInfo({ sources, articles, readings }: FunctionProps) {
	return (
		<div className="text-primary-300 mt-3 flex items-center justify-start gap-3 text-sm">
			<div className="flex items-center justify-start gap-1">
				<span>
					<ScrollText size={18} />
				</span>
				<span className="font-medium">
					{sources < 10 && sources !== 0 ? `0${sources}` : sources} Sources
				</span>
			</div>

			<div className="ml-2 flex items-center justify-start gap-1">
				<span>
					<Newspaper size={18} />
				</span>
				<span className="font-medium">
					{articles < 10 && articles !== 0 ? `0${articles}` : articles} Articles
				</span>
			</div>

			<div className="ml-2 flex items-center justify-start gap-1">
				<span>
					<BookOpenText size={18} />
				</span>
				<span className="font-medium">
					{readings < 10 && readings !== 0 ? `0${readings}` : readings} Further
					Readings
				</span>
			</div>
		</div>
	);
}

export default SearchResultInfo;
