import { useState } from 'react';
import SearchBox from './components/SearchBox';
import ArticleList from './components/ArticleList';
import { articles } from './data/articles';
import { searchArticles } from './utils/searchArticles';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = searchArticles(articles, searchQuery);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="hidden md:block w-80 bg-white border-r border-gray-200 p-8">
        <div className="sticky top-8">
          <h3 className="text-xl font-bold mb-3">bitsofcode</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Articles on Frontend Development. All articles are written by Ire Aderinokun, Frontend Developer and User Interface Designer.
          </p>
        </div>
      </aside>
      <main className="flex-1 max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Search</h1>
        <SearchBox onSearch={setSearchQuery} />
        <ArticleList articles={filteredArticles} query={searchQuery} />
      </main>
    </div>
  );
}

export default App;
