import { useEffect, useRef, useState } from 'react';

interface Props {
  onSearch: (query: string) => void;
}

const SearchBox = ({ onSearch }: Props) => {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(input);
    }, 300);

    return () => clearTimeout(timer);
  }, [input, onSearch]);

  const handleClear = () => {
    setInput('');
    inputRef.current?.focus();
  };

  return (
    <div className="relative mb-8">
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search articles..."
        className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      {input && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xl cursor-pointer"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchBox;
