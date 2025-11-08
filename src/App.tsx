
import {Routes, Route } from "react-router-dom";
import Navbar  from "./components/Navbar";
import Battle from "./pages/Battle";
import History from "./pages/History";
import Pokedex from "./pages/Pokedex";
import About from "./pages/About";
import HomePage from "./pages/Home";
function App() {
  return (
    <div className="body-bg bg-[#4472C4] min-h-screen">
    <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
         <Route path="/battle" element={<Battle />} />
          <Route path="/history" element={<History />} />
          <Route path="/pokedex" element={<Pokedex/>} />
          <Route path="/about" element={<About/>} />
          </Routes>
          </main>
  </div>
  );
}
 export default App;