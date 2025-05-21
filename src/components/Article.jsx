import PropTypes from 'prop-types';
import formatArrayToString from '../utils/formatArrayToString';

function Article({ title, link, publisher, authors = [] }) {
	return (
		<li className="bg-primary-60 shadow-primary my-4 rounded-sm px-3 py-2 shadow-xs transition-all duration-150 ease-in hover:shadow-md">
			<a
				href={link}
				target="_blank"
			>
				<div>
					<h4 className="text-primary-400 text-md mb-2 font-medium underline underline-offset-2">
						{title}
					</h4>
					{authors.length > 0 ? (
						<p className="text-primary text-sm">
							By {formatArrayToString(authors)}
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
