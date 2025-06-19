import PropTypes from 'prop-types';

import SubHeader from '@/components/SubHeader';
import Article from '@/components/Article';
import NoSectionDialog from '@/components/NoSectionDialog';

function ArticlesContainer({ articles }) {
	if (articles && articles.length === 0) {
		return <NoSectionDialog name="Articles" />;
	}

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
