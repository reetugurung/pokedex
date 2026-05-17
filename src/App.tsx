import Navbar from "./components/Navbar";
import Battle from "./pages/Battle";
import History from "./pages/History";
import Pokedex from "./pages/Pokedex";
import About from "./pages/About";
import HomePage from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
    
      <main className="bg-blue-600 min-h-screen">
        <section id="home">
          <HomePage />
        </section>
        
        <section id="battle">
          <Battle />
        </section>
        
        <section id="history">
          <History />
        </section>
        
        <section id="pokedex">
          <Pokedex />
        </section>
        
        <section id="about">
          <About />
        </section>
      </main>
    </>
  );
}

export default App;