import React, {useState, useEffect} from 'react';
import { Pokedex, Pokegen } from '../../components';

export default function Home( { pokemon, setPokemon, gen, setGen, getPokemon } ) {
  return (
    <div>
        <Pokegen setPokemon={setPokemon} gen={gen} setGen={setGen} getPokemon={getPokemon} />
        <Pokedex pokemon={pokemon}/>
    </div>
  )
}
