import { useState, useEffect } from "react";

interface Pokemon {
  name: string;
  hp: number;
  sprites: { front_default: string };
}

const Battle = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [playerChoice, setPlayerChoice] = useState<Pokemon | null>(null);
  const [enemyChoice, setEnemyChoice] = useState<Pokemon | null>(null);
  const [gameStarted, setGameStarted] = useState(false);

  const [playerHP, setPlayerHP] = useState(100);
  const [enemyHP, setEnemyHP] = useState(100);
  const [battleLog, setBattleLog] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);

  // 1. Fetch the list of names for the dropdown
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=12")
      .then((res) => res.json())
      .then(async (data) => {
        const details = await Promise.all(
          data.results.map(async (p: any) => {
            const res = await fetch(p.url);
            return res.json();
          })
        );
        setPokemonList(details);
      });
  }, []);

  const saveToHistory = (winner: string, loser: string) => {
    const newRecord = {
      id: Date.now(),
      winner,
      loser,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    const existing = JSON.parse(localStorage.getItem("pokemonBattles") || "[]");
    localStorage.setItem("pokemonBattles", JSON.stringify([newRecord, ...existing]));
  };

  const handleAttack = () => {
    if (isGameOver || !playerChoice || !enemyChoice) return;
    
    const damage = Math.floor(Math.random() * 20) + 10;
    const newEnemyHP = Math.max(0, enemyHP - damage);
    setEnemyHP(newEnemyHP);
    setBattleLog(`${playerChoice.name} attacked!`);

    if (newEnemyHP <= 0) {
      setBattleLog(`${playerChoice.name} Wins!`);
      setIsGameOver(true);
      saveToHistory(playerChoice.name, enemyChoice.name);
    } else {
      setTimeout(() => {
        const enemyDamage = Math.floor(Math.random() * 15) + 5;
        const newPlayerHP = Math.max(0, playerHP - enemyDamage);
        setPlayerHP(newPlayerHP);
        if (newPlayerHP <= 0) {
          setBattleLog(`${enemyChoice.name} Wins!`);
          setIsGameOver(true);
          saveToHistory(enemyChoice.name, playerChoice.name);
        }
      }, 500);
    }
  };

  // --- SELECTION SCREEN ---
  if (!gameStarted) {
    return (
      <section id="battle" className="py-20 text-white text-center bg-blue-600 min-h-screen">
        <h2 className="text-4xl font-bold mb-10">Select Your Fighters</h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-10 p-6">
          {/* Player Dropdown */}
          <div className="bg-white/10 p-6 rounded-xl">
            <label className="block mb-2 font-bold">Choose Player 1:</label>
            <select 
              className="bg-gray-800 text-white p-2 rounded w-64 uppercase"
              onChange={(e) => setPlayerChoice(pokemonList.find(p => p.name === e.target.value) || null)}
            >
              <option value="">-- Select --</option>
              {pokemonList.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
            </select>
            {playerChoice && <img src={playerChoice.sprites.front_default} className="mx-auto w-32" />}
          </div>

          {/* Enemy Dropdown */}
          <div className="bg-white/10 p-6 rounded-xl">
            <label className="block mb-2 font-bold">Choose Opponent:</label>
            <select 
              className="bg-gray-800 text-white p-2 rounded w-64 uppercase"
              onChange={(e) => setEnemyChoice(pokemonList.find(p => p.name === e.target.value) || null)}
            >
              <option value="">-- Select --</option>
              {pokemonList.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
            </select>
            {enemyChoice && <img src={enemyChoice.sprites.front_default} className="mx-auto w-32" />}
          </div>
        </div>

        {playerChoice && enemyChoice && (
          <button 
            onClick={() => { setGameStarted(true); setIsGameOver(false); setPlayerHP(100); setEnemyHP(100); }}
            className="mt-10 bg-yellow-400 text-blue-900 font-black px-10 py-4 rounded-full text-xl"
          >
            START BATTLE
          </button>
        )}
      </section>
    );
  }

  // --- BATTLE ARENA ---
  return (
    <section id="battle" className="py-20 bg-blue-600 text-white min-h-screen flex flex-col items-center justify-center">
      <div className="flex gap-20 items-center">
        <div className="text-center">
          <img src={playerChoice?.sprites.front_default} className="w-40 h-40" />
          <p className="font-bold uppercase">{playerChoice?.name}</p>
          <div className="w-48 h-4 bg-gray-700 rounded-full mt-2 overflow-hidden border">
            <div className="h-full bg-green-500" style={{ width: `${playerHP}%` }}></div>
          </div>
        </div>

        <div className="text-5xl font-black italic">VS</div>

        <div className="text-center">
          <img src={enemyChoice?.sprites.front_default} className="w-40 h-40" />
          <p className="font-bold uppercase">{enemyChoice?.name}</p>
          <div className="w-48 h-4 bg-gray-700 rounded-full mt-2 overflow-hidden border">
            <div className="h-full bg-red-500" style={{ width: `${enemyHP}%` }}></div>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-black/20 p-6 rounded-xl w-full max-w-md text-center">
        <p className="mb-4 italic font-bold">"{battleLog}"</p>
        {!isGameOver ? (
          <button onClick={handleAttack} className="bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-full">ATTACK</button>
        ) : (
          <button onClick={() => setGameStarted(false)} className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full">New Battle</button>
        )}
      </div>
    </section>
  );
};

export default Battle;