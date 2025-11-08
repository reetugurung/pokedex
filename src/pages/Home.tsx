import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="flex flex-row md:flex-row justify-between items-center text-white px-6 py-40">
      
      <div className="md:w-1/2 p-4 text-center md:text-left space-y-6">
        <h2 className="text-3xl font-semibold">Welcome to</h2>
        <h1 className="text-5xl font-bold text-white drop-shadow-md">
          Battle Pokemon
        </h1>
        <p className="text-lg text-gray-200">
          Battle Pokemon is a fun and engaging way to battle between pokemons,
          whether for casual play or serious competition between the pokemons.
        </p>
        <Link
          to="/battle"
          className="inline-block bg-white text-blue-500 font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-700 hover transition-all duration-300"
        >
          Start Battle
        </Link>
      </div>

      
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src="/Charizard.png"
          alt="Charizard"
          className="w-80 h-auto drop-shadow-lg transform hover:scale-105 transition duration-300"
        />
      </div>
    </section>
  );
};

export default HomePage;