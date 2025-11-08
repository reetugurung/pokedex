import { useState } from "react";
import { usePokemons } from "../hooks/usePokemons";
import { usePokemonDetails } from "../hooks/usePokemonDetails";

const BattlePage = () => {
  const { data: pokemons } = usePokemons();

  
  const [player1, setPlayer1] = useState("pikachu");
  const [player2, setPlayer2] = useState("charizard");
  const [winner, setWinner] = useState("");

  const { data: pokemon1 } = usePokemonDetails(player1);
  const { data: pokemon2 } = usePokemonDetails(player2);

  const handleBattle = () => {
    if (!pokemon1 || !pokemon2) return;
    const randomWinner = Math.random() < 0.5 ? player1 : player2;
    setWinner(randomWinner);
  };

  return (
    <section className="px-6 md:px-20 py-10 min-h-[80vh]  bg-[#447CD]">
      <h1 className="text-4xl font-bold text-center text-white  mb-10">
        Let the Battle Begin
      </h1>

      
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
       
        <select
          onChange={(e) => setPlayer1(e.target.value)}
          value={player1}
          className="p-3 rounded-lg border-2 border-blue-400  text-white focus:outline-none"
        >
          {pokemons?.map((p: any) => (
            <option key={p.name} value={p.name}>
              {p.name}
            </option>
          ))}
        </select>

        <span className="font-bold text-xl text-white">VS</span>

        
        <select
          onChange={(e) => setPlayer2(e.target.value)}
          value={player2}
          className="p-3 rounded-lg border-2 border-blue-400 text-white focus:outline-none"
        >
          {pokemons?.map((p: any) => (
            <option key={p.name} value={p.name}>
              {p.name}
            </option>
          ))}
        </select>
      </div>

     
      <div className="flex flex-col md:flex-row justify-center items-center gap-20 mb-10">
       
        <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 w-64">
          <img
            src={
              pokemon1?.sprites?.other["official-artwork"].front_default ||
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            }
            alt={pokemon1?.name || "Pikachu"}
            className="w-40 h-40 drop-shadow-lg"
          />
          <h2 className="capitalize text-2xl font-semibold mt-3 text-gray-800">
            {pokemon1?.name || "Pikachu"}
          </h2>

          
          {pokemon1 ? (
            <div className="mt-3 text-sm text-gray-600 space-y-1">
              <p>❤️ HP: {pokemon1.stats[0].base_stat}</p>
              <p>💪Attack: {pokemon1.stats[1].base_stat}</p>
              <p>🛡️ Defense: {pokemon1.stats[2].base_stat}</p>
              <p>⚡ Speed: {pokemon1.stats[5].base_stat}</p>
            </div>
          ) : (
            <p className="mt-3 text-gray-400 text-sm">Loading stats...</p>
          )}
        </div>

        
        <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 w-64">
          <img
            src={
              pokemon2?.sprites?.other["official-artwork"].front_default ||
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
            }
            alt={pokemon2?.name || "Charizard"}
            className="w-40 h-40 drop-shadow-lg scale-x-[-1]" // Flipped to face opponent
          />
          <h2 className="capitalize text-2xl font-semibold mt-3 text-gray-800">
            {pokemon2?.name || "Charizard"}
          </h2>

          
          {pokemon2 ? (
            <div className="mt-3 text-sm text-gray-600 space-y-1">
              <p>❤️ HP: {pokemon2.stats[0].base_stat}</p>
              <p>💪 Attack: {pokemon2.stats[1].base_stat}</p>
              <p>🛡️ Defense: {pokemon2.stats[2].base_stat}</p>
              <p>⚡ Speed: {pokemon2.stats[5].base_stat}</p>
            </div>
          ) : (
            <p className="mt-3 text-gray-400 text-sm">Loading stats...</p>
          )}
        </div>
      </div>

      <div className="text-center mt-8">
        <button
          onClick={handleBattle}
          disabled={!player1 || !player2}
          className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition disabled:opacity-50"
        >
          Start Battle
        </button>
      </div>

      
      {winner && (
        <div className="text-center mt-8 text-2xl font-bold text-green-600 animate-bounce">
          🏆 Winner: {winner.toUpperCase()}!
        </div>
      )}
    </section>
  );
};

export default BattlePage;