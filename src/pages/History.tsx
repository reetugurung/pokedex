import { useState, useEffect } from "react";

// 1. Define the structure of a single Battle record
interface BattleRecord {
  id: number;
  winner: string;
  loser: string;
  date: string;
  time: string;
}

const History = () => {
  // 2. Tell the state to expect an array of BattleRecord objects
  const [battles, setBattles] = useState<BattleRecord[]>([]);

  const loadHistory = () => {
    // 3. Cast the JSON parse result so TypeScript knows it's the right type
    const data = JSON.parse(localStorage.getItem("pokemonBattles") || "[]") as BattleRecord[];
    setBattles(data);
  };

  useEffect(() => {
    loadHistory();
    window.addEventListener("focus", loadHistory); 
    return () => window.removeEventListener("focus", loadHistory);
  }, []);

  return (
    <section id="history" className="py-20 px-6">
      <h2 className="text-4xl font-bold text-white mb-10 text-center">Battle History</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {battles.length === 0 ? (
          <p className="text-blue-200 text-center">No battles recorded yet!</p>
        ) : (
          battles.map((log) => (
            // Now log.id is recognized because of the Interface above!
            <div key={log.id} className="bg-white p-4 rounded-xl shadow flex justify-between items-center border-l-8 border-blue-500">
              <div>
                <p className="font-bold text-gray-800">
                  <span className="text-blue-600">{log.winner}</span> beat {log.loser}
                </p>
                <p className="text-[10px] text-gray-400">{log.date} at {log.time}</p>
              </div>
              <div className="font-black text-blue-100 text-xl">#WIN</div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default History;