import { BookOpenText, Newspaper, ScrollText } from 'lucide-react';
import SearchResultInfoPiece from './SearchResultInfoPiece';

interface FunctionProps {
	sources: number;
	articles: number;
	readings: number;
}

function SearchResultInfo({ sources, articles, readings }: FunctionProps) {
	return (
		<div className="text-primary-300 mt-3 flex items-center justify-start gap-3 text-sm">
			<SearchResultInfoPiece
				field={sources}
				fieldName="Source"
				className="ml-0"
			>
				<ScrollText size={18} />
			</SearchResultInfoPiece>

			<SearchResultInfoPiece
				field={articles}
				fieldName="Article"
			>
				<Newspaper size={18} />
			</SearchResultInfoPiece>

			<SearchResultInfoPiece
				field={readings}
				fieldName="Reading"
			>
				<BookOpenText size={18} />
			</SearchResultInfoPiece>
		</div>
	);
}

export default SearchResultInfo;
