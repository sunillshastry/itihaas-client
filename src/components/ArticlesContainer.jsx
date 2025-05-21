import PropTypes from 'prop-types';
import SubHeader from './SubHeader';
import Article from './Article';

function ArticlesContainer({ articles }) {
	return (
		<section className="mt-5">
			<SubHeader>Articles</SubHeader>
			<ul>
				{articles &&
					articles.map(function (article) {
						return (
							<Article
								key={article._id}
								title={article.title}
								authors={article.authors}
								link={article.link}
								publisher={article.publisher}
							/>
						);
					})}
			</ul>
		</section>
	);
}

ArticlesContainer.propTypes = {
	articles: PropTypes.array.isRequired,
};

export default ArticlesContainer;
