import React from 'react'

export default function Pokecard(pokemon) {
  if(pokemon.pokemon.types.length == 1) {
    if(pokemon.pokemon.base_experience) {
      return (
        <div className="pokecard">
            <span>
                <div className="starter">{pokemon.pokemon.name.charAt(0).toUpperCase() + pokemon.pokemon.name.slice(1)}</div>
                <img src={pokemon.pokemon.sprites.front_default} className="starter" />
                <div className="starter">{pokemon.pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.pokemon.types[0].type.name.slice(1)}</div>
                <div className="invis title">Base Experience:</div>
                <div className="invis">{pokemon.pokemon.base_experience}</div>
                <div className="invis title">Base Stat Total:</div>
                <div className="invis">{pokemon.pokemon.stats[0].base_stat + pokemon.pokemon.stats[1].base_stat + pokemon.pokemon.stats[2].base_stat + pokemon.pokemon.stats[3].base_stat + pokemon.pokemon.stats[4].base_stat + pokemon.pokemon.stats[5].base_stat}</div>
            </span>
        </div>
      )
    } else {
      return (
        <div className="pokecard">
            <span>
                <div className="starter">{pokemon.pokemon.name.charAt(0).toUpperCase() + pokemon.pokemon.name.slice(1)}</div>
                <img src={pokemon.pokemon.sprites.front_default} className="starter" />
                <div className="starter">{pokemon.pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.pokemon.types[0].type.name.slice(1)}</div>
                <div className="invis title">Base Experience:</div>
                <div className="invis">N/A</div>
                <div className="invis title">Base Stat Total:</div>
                <div className="invis">{pokemon.pokemon.stats[0].base_stat + pokemon.pokemon.stats[1].base_stat + pokemon.pokemon.stats[2].base_stat + pokemon.pokemon.stats[3].base_stat + pokemon.pokemon.stats[4].base_stat + pokemon.pokemon.stats[5].base_stat}</div>
            </span>
        </div>
      )
    }
  } else {
    if(pokemon.pokemon.base_experience) {
      return (
        <div className="pokecard">
            <span>
                <div className="starter">{pokemon.pokemon.name.charAt(0).toUpperCase() + pokemon.pokemon.name.slice(1)}</div>
                <img src={pokemon.pokemon.sprites.front_default}  className="starter"/>
                <div className="starter">{pokemon.pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.pokemon.types[0].type.name.slice(1)} {pokemon.pokemon.types[1].type.name.charAt(0).toUpperCase() + pokemon.pokemon.types[1].type.name.slice(1)}</div>
                <div className="invis title">Base Experience:</div>
                <div className="invis">{pokemon.pokemon.base_experience}</div>
                <div className="invis title">Base Stat Total:</div>
                <div className="invis">{pokemon.pokemon.stats[0].base_stat + pokemon.pokemon.stats[1].base_stat + pokemon.pokemon.stats[2].base_stat + pokemon.pokemon.stats[3].base_stat + pokemon.pokemon.stats[4].base_stat + pokemon.pokemon.stats[5].base_stat}</div>
            </span>
        </div>
      )
    } else {
      return (
        <div className="pokecard">
            <span>
                <div className="starter">{pokemon.pokemon.name.charAt(0).toUpperCase() + pokemon.pokemon.name.slice(1)}</div>
                <img src={pokemon.pokemon.sprites.front_default}  className="starter"/>
                <div className="starter">{pokemon.pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.pokemon.types[0].type.name.slice(1)} {pokemon.pokemon.types[1].type.name.charAt(0).toUpperCase() + pokemon.pokemon.types[1].type.name.slice(1)}</div>
                <div className="invis title">Base Experience:</div>
                <div className="invis">N/A</div>
                <div className="invis title">Base Stat Total:</div>
                <div className="invis">{pokemon.pokemon.stats[0].base_stat + pokemon.pokemon.stats[1].base_stat + pokemon.pokemon.stats[2].base_stat + pokemon.pokemon.stats[3].base_stat + pokemon.pokemon.stats[4].base_stat + pokemon.pokemon.stats[5].base_stat}</div>
            </span>
        </div>
      )
    }
  }
}
