import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PokemonList from "./pages/PokemonList";
import Types from "./pages/Types";
import Teams from "./pages/Teams";
import Team from "./pages/Team";
import Type from "./pages/Type";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<PokemonList />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
        <Route path="/types" element={<Types />} />
        <Route path="/types/:id" element={<Type />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:id" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
