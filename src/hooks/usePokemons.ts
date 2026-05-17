import { useQuery } from "@tanstack/react-query";

const fetchPokemons = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  if (!res.ok) throw new Error("Failed to fetch Pokémon");
  const data = await res.json();
  return data.results; 
};

export const usePokemons = () => {
  return useQuery({
    queryKey: ["pokemons"],
    queryFn: fetchPokemons,
  });
};