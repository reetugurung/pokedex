import { useState } from "react";
import { usePokemons } from "../hooks/usePokemons";
import SearchBar from "../components/SearchBar";
import PokemonCard from "../components/PokemonCard";

const PokedexPage = () => {
  const { data: pokemons, isLoading, isError } = usePokemons();
  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading)
    return <p className="text-center text-gray-600 mt-20">Loading Pokémons...</p>;

  if (isError)
    return <p className="text-center text-red-500 mt-20">Failed to load Pokémons</p>;

  const filtered = pokemons?.filter((p: { name: string }) =>
    p.name.toLowerCase().includes(searchTerm)
  );

  return (
    <section className="px-6 md:px-20 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-white">Pokédex</h1>

      <div className="flex justify-center mb-10">
        <SearchBar onSearch={setSearchTerm} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filtered?.map((p: { name: string }, i: number) => (
          <PokemonCard key={i} name={p.name} index={i} />
        ))}
      </div>
    </section>
  );
};

export default PokedexPage;