import * as Actions from '../actionTypes'

export function addPokemon(pokemon) {
    return {
        type: Actions.POKEMON_ADDED,
        payload: pokemon
    };
}
