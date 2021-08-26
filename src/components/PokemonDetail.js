import React from 'react';

const PokemonSkills = (abilities) => {
    console.warn(abilities)
    return (
        <div className="col">
            <div className="container">
            {abilities.skills.map(skill => 
                <div key={skill.ability.name} className="col">
                    {skill.base_experience}
                </div>
                )}
            </div>
        </div>
    )
}
// abilities: Array(2), base_experience: 112, forms: Array(1), game_indices: Array(20), height: 4, 
const PokemonDetail = ({ pokemon }) => {
    console.log(pokemon)
    return (
        <div className="container">
            <div className="row">
                <PokemonSkills skills={pokemon.abilities} />
                <div className="col">
                    Column
                </div>
                <div className="col">
                    Column
                </div>
            </div>
        </div>
    )
}

export default PokemonDetail;