import type { Article } from '../types';
import { highlightText } from '../utils/highlightText';

interface Props {
  article: Article;
  query: string;
}

const ArticleCard = ({ article, query }: Props) => {
  return (
    <div className="mb-8 pb-8 border-b border-gray-200 last:border-b-0">
      <h2 className="text-2xl font-bold mb-2 leading-tight">
        {highlightText(article.title, query)}
      </h2>
      <p className="text-gray-500 text-sm mb-3">{article.date}</p>
      <p className="text-gray-700 leading-relaxed">
        {highlightText(article.content, query)}
      </p>
    </div>
  );
};

export default ArticleCard;
