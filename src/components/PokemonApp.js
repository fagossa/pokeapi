import React, { useState /*, useEffect*/ } from 'react';

import PokemonSearch from './PokemonSearch';
import PokemonDetail from './PokemonDetail';

const PokemonApp = () => {
    const [currentPokemon, setCurrentPokemon] = useState(null)

    const searchPokemon = async (name) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const data = await res.json()
        setCurrentPokemon(data)
    }

    // useEffect(() => {
    //     searchPokemon('pikachu');

    //   }, []);

    return (
        <div>
            <PokemonSearch onSearch={searchPokemon}/>
            {currentPokemon 
                ? <PokemonDetail pokemon={currentPokemon}/> 
                : 'no pokemon found'}
        </div>
    )
}

export default PokemonApp;