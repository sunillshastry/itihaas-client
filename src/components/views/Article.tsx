import PropTypes from 'prop-types';

import formatArrayToString from '@/utils/formatArrayToString';

interface FunctionProps {
	title: string;
	link: string;
	publisher: string;
	authors: string[];
}

function Article({ title, link, publisher, authors = [] }: FunctionProps) {
	return (
		<li className="bg-primary-60 shadow-primary my-4 w-full max-w-full rounded-sm px-3 py-2 shadow-xs transition-all duration-150 ease-in hover:shadow-md">
			<a
				href={link}
				target="_blank"
			>
				<div className="w-full max-w-full break-words whitespace-normal">
					<h4 className="text-primary-400 mb-2 text-base font-medium underline underline-offset-2">
						{title}
					</h4>
					{authors.length > 0 ? (
						<p className="text-primary text-sm">
							By {formatArrayToString<string>(authors)}
						</p>
					) : (
						<p className="text-primary text-sm">Author unavailable</p>
					)}

					{publisher ? (
						<p className="text-primary text-sm">Published by {publisher}</p>
					) : (
						<p className="text-primary text-sm">Publisher unavailable</p>
					)}

					<p className="text-primary-300 mt-2 text-sm underline">{link}</p>
				</div>
			</a>
		</li>
	);
}

Article.propTypes = {
	title: PropTypes.string.isRequired,
	authors: PropTypes.array,
	link: PropTypes.string.isRequired,
	publisher: PropTypes.string,
};

export default Article;
