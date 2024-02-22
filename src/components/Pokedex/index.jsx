import React from 'react'
import Pokecard from '../Pokecard';

export default function Pokedex({pokemon}) {
  switch (pokemon.length % 3) {
    case 0:
      return (
        <div> 
            <ul>{pokemon.map((poke, i) => {
                return <li className="pokecard-list"><Pokecard pokemon={poke} key={i} /></li>
            })}
            </ul>
        </div>
      )
    case 1:
      return (
        <div> 
            <ul>{pokemon.map((poke, i) => {
              if (i == pokemon.length - 1) {
                return <li className="pokecard-list-1"><Pokecard pokemon={poke} key={i} /></li>
              } else {
                return <li className="pokecard-list"><Pokecard pokemon={poke} key={i} /></li>
              }
            })}
            </ul>
        </div>
      )
    case 2:
      return (
        <div> 
            <ul>{pokemon.map((poke, i) => {
              console.log(i);
              console.log(pokemon.length)
              if (i >= pokemon.length - 2) {
                console.log("Hello");
                return <li className="pokecard-list-2"><Pokecard pokemon={poke} key={i} /></li>
              } else {
                return <li className="pokecard-list"><Pokecard pokemon={poke} key={i} /></li>
              }
            })}
            </ul>
        </div>
      )
  }
}
