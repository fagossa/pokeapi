
import * as Actions from '../actionTypes'

const pokemonReducer = (state, action) => {
    if (!state) {
        return {
            pokemons: []
        }
    }
    switch (action.type) {
        case Actions.POKEMON_ADDED:
            return {
                ...state,
                currPokemon: action.payload,
                pokemons: [
                    ...state.pokemons,
                    action.payload,
                ]
            };
        case Actions.POKEMON_REMOVED:
            return {
                ...state,
                pokemons: state.pokemons.filter(p => p.name !== action.payload.name)
            };
        default:
            return state;
    }
}

export default pokemonReducer;