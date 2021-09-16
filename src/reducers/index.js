import { combineReducers } from 'redux';
import pokemonReducer from './pokemonList';

const allReducers = combineReducers({
    pokemon: pokemonReducer
})

export default allReducers;
