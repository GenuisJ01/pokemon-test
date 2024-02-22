import React, { useEffect } from 'react'

export default function Pokegen({setPokemon, gen, setGen, getPokemon}) {
    function setter(e) {
        setGen(e.target.value);
    }

    useEffect(() => {
        let tempPokemon = []

        async function getter() {
            if (gen === "gen1") {
                for (let i = 1; i < 152; i++) {
                    tempPokemon.push(await getPokemon(i));
                }
            } else if (gen === "gen2") {
                for (let i = 152; i < 252; i++) {
                    tempPokemon.push(await getPokemon(i));
                }
            } else if (gen === "gen3") {
                for (let i = 252; i < 387; i++) {
                    tempPokemon.push(await getPokemon(i));
                }
            } else if (gen === "gen4") {
                for (let i = 387; i < 495; i++) {
                    tempPokemon.push(await getPokemon(i));
                }
            } else if (gen === "gen5") {
                for (let i = 495; i < 650; i++) {
                    tempPokemon.push(await getPokemon(i));
                }
            } else if (gen === "gen6") {
                for (let i = 650; i < 722; i++) {
                    tempPokemon.push(await getPokemon(i));
                }
            } else if (gen === "gen7") {
                for (let i = 722; i < 810; i++) {
                    tempPokemon.push(await getPokemon(i));
                }
            } else if (gen === "gen8") {
                for (let i = 810; i < 906; i++) {
                    tempPokemon.push(await getPokemon(i));
                }
            } else if (gen === "gen9") {
                for (let i = 906; i < 1026; i++) {
                    tempPokemon.push(await getPokemon(i));
                }
            }
            setPokemon(tempPokemon);
        }

        getter();
    }, [gen]);

  return (
    <div>
        <p>Choose A Generation!</p>
        <label>
            <input type="radio" value="gen1" name="genRadio" onChange={setter}/>
            Generation 1
        </label>
        <label>
            <input type="radio" value="gen2" name="genRadio" onChange={setter}/>
            Generation 2
        </label>
        <label>
            <input type="radio" value="gen3" name="genRadio" onChange={setter}/>
            Generation 3
        </label>
        <label>
            <input type="radio" value="gen4" name="genRadio" onChange={setter}/>
            Generation 4
        </label>
        <label>
            <input type="radio" value="gen5" name="genRadio" onChange={setter}/>
            Generation 5
        </label>
        <label>
            <input type="radio" value="gen6" name="genRadio" onChange={setter}/>
            Generation 6
        </label>
        <label>
            <input type="radio" value="gen7" name="genRadio" onChange={setter}/>
            Generation 7
        </label>
        <label>
            <input type="radio" value="gen8" name="genRadio" onChange={setter}/>
            Generation 8
        </label>
        <label>
            <input type="radio" value="gen9" name="genRadio" onChange={setter}/>
            Generation 9
        </label>
    </div>
  )
}
