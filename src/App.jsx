import { useState } from 'react'
import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Pokedex } from './components';
import { Home } from './pages';
import { Nav } from './layouts';

async function getPokemon(i) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
  const poke = await response.json();
  return poke;
}

function App() {
  const [gen, setGen] = useState("");
  const [pokemon, setPokemon] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home gen={gen} setGen={setGen} getPokemon={getPokemon} pokemon={pokemon} setPokemon={setPokemon} />} />
        </Route>
        <Route path="*" element={<h1>Page Not Found!</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
