import type { Article } from '../types';
import ArticleCard from './ArticleCard';

interface Props {
  articles: Article[];
  query: string;
}

const ArticleList = ({ articles, query }: Props) => {
  if (!query) return null;

  return (
    <div>
      <p className="text-lg font-semibold mb-6">
        {articles.length} {articles.length === 1 ? 'post' : 'posts'} were found.
      </p>
      <div>
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} query={query} />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
