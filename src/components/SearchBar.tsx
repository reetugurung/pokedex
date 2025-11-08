type SearchBarProps = {
  onSearch: (value: string) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <input
      type="text"
      placeholder="Search Pokémon..."
      onChange={(e) => onSearch(e.target.value.toLowerCase())}
      className="w-full md:w-1/2 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
    />
  );
};

export default SearchBar;