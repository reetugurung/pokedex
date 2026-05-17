import { useQuery } from "@tanstack/react-query";

const fetchPokemonDetails = async (name: string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!res.ok) throw new Error("Failed to fetch Pokémon details");
  return res.json();
};

export const usePokemonDetails = (name: string) => {
  return useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => fetchPokemonDetails(name),
    enabled: !!name, 
  });
};