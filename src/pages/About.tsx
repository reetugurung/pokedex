import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="bg-[#4472C4] text-white min-h-screen flex flex-col items-center justify-center px-8 py-16">
      
      
      <h1 className="text-5xl font-bold mb-6 text-center">About Battle Pokémon</h1>

      
      
      <p className="max-w-3xl text-center text-lg leading-relaxed mb-10">
        Welcome to <span className="font-semibold">Battle Pokémon</span> — a fun and
        interactive platform built for Pokémon fans! Experience the excitement of
        Pokémon battles, explore the Pokédex, and track your progress as you grow
        into a Pokémon Master. Whether you're a casual fan or a seasoned trainer,
        this app is your ultimate Pokémon battle arena.
      </p>

      
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl text-left">
        <div className="bg-white text-[#4472C4] rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-3">⚔️ Battle Mode</h2>
          <p>
            Engage in thrilling Pokémon battles, choose your favorite Pokémon, and
            test your strategy to see who comes out on top.
          </p>
        </div>

        <div className="bg-white text-[#4472C4] rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-3">📘 Pokédex</h2>
          <p>
            Browse through detailed Pokémon information including stats, abilities,
            and types — powered by live data.
          </p>
        </div>

        <div className="bg-white text-[#4472C4] rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-3">📜 Battle History</h2>
          <p>
            Review your past battles and track your victories to become the ultimate
            Pokémon champion!
          </p>
        </div>

        <div className="bg-white text-[#4472C4] rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-3">💡 Built With</h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>React + Vite for blazing-fast performance</li>
            <li>Tailwind CSS for sleek styling</li>
            <li>PokéAPI for real-time Pokémon data</li>
            <li>React Router for smooth navigation</li>
          </ul>
        </div>
      </div>

      
            <Link to="/battle"
        className="mt-12 bg-white text-[#4472C4] px-6 py-3 rounded-full font-semibold shadow-md hover:bg-transparent hover:text-white border-2 border-white transition">
        Start Your Battle Journey
      </Link>
    </div>
  );
};

export default About;