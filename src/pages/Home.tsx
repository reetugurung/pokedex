

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
        <a 
  href="#battle" 
  className="mt-12 bg-white text-[#4472C4] px-6 py-3 rounded-full font-semibold shadow-md hover:bg-transparent hover:text-white border-2 border-white transition inline-block"
>
  Start Your Battle 
</a>
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