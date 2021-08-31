import { createStore } from 'redux';
import pokemonReducer from '../reducers';

const pokemonStore = createStore(
    pokemonReducer
);

export default pokemonStore;
